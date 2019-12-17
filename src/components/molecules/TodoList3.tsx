import React, { useState, useEffect } from "react";
import styled from "../../theme/styled";
import Body from "../../theme/Body";
import Clickable from "./Clickable";
import Button from "../../theme/Button";

const TodoList3 = ({className}: {className?: string}) => {
    const [ items, setItems ] = useState(new Array<string>());
    const [ inputText, setInputText ] = useState("");

    const [ inputsText, setInputsText ] = useState(new Array<string>());
    
    const [ editing, setEditing ] = useState(false);

    useEffect(() => {
        setInputsText(items);
    }, [editing]);

    function handleEditingToggle() {
        if (editing) {
            // save
            setItems(inputsText);
        }
       (editing || items.length > 0) && setEditing(!editing)
    }

    const updateInputs = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        setInputsText(inputsText.map((t, ind) => i === ind ? e.target.value : t));
    }

    const checkBackspace = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
        console.log(e.keyCode);
        if (e.keyCode === 8 && inputsText[i] === "") {
            setInputsText(inputsText.filter((it, ind) => i !== ind));
            return;
        }
    }

    const addNewItem = () => {
        (editing ? setInputsText([inputText, ...inputsText]) : setItems([inputText, ...items]));
        setInputText("");
    }

    return (
        <Container className={className}>
            <Flex>
                <Input 
                    type="text" 
                    placeholder="Add new todo" 
                    value={inputText} 
                    onChange={e => setInputText(e.target.value)}
                    onKeyDown={e => e.keyCode === 13 && addNewItem()}
                />
                <AddButton disabled={inputText.length === 0} onClick={_ => addNewItem()}>Add</AddButton>
            </Flex>
            <Button 
                onClick={handleEditingToggle}
                inline={"padding: 5px 15px; font-size: 16px"}
                disabled={items.length === 0}
            >{editing ? "Save" : "Edit" }</Button>
            <CancelButton
                editing={editing}
                onClick={() => editing && setEditing(false)}
            >Cancel</CancelButton>
            <FlexColumn>
                {
                    (editing ? inputsText : items).map((item, i) =>
                        editing ? (
                            <Item key={i}>
                                • <EditInput 
                                    type="text" 
                                    key={i} 
                                    value={inputsText[i]} 
                                    onChange={e => updateInputs(e, i)}
                                    placeholder="Backspace to delete"
                                    onKeyDown={e => checkBackspace(e, i)}
                                />
                                <HighlightedText onClick={() => setInputsText(inputsText.filter((it, ind) => i !== ind))}>Delete</HighlightedText>
                            </Item>
                        )
                            :
                        <Item key={i}>• {item}</Item>
                    )
                }
            </FlexColumn>
        </Container>
    )

}

export default TodoList3;

const Container = styled.div`
    background-color: ${p => p.theme.colors.primaryDarkTint};
    padding: 20px;
`;

const Flex = styled.div`
    display: flex;
    margin: 0 0 10px 0;
`

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 0;
    overflow-y: scroll;
    height: 150px;
    color: ${props => props.theme.colors.neutral};
`

const Input = styled.input`
    flex: 1;
    color: ${props => props.theme.colors.neutral};
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.default};
    padding: 6px 9px;
    margin: 0 20px 0 0;
    transition: all 0.2s ease;
    &:hover {
        border: 1px solid ${props => props.theme.colors.primaryShadow};
        background-color: #236BD9;
    }
    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.colors.complementary};
    }
    font-size: ${props => props.theme.fontSizes.bodyMobile};
    ${props => props.theme.mediaQueries.tablet} {
        font-size: ${props => props.theme.fontSizes.body};
    }
`;

const EditInput = styled.input`
    flex: 1;
    color: ${props => props.theme.colors.neutral};
    border: none;
    background-color: transparent;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    padding: 0 2px;
    margin: 0 20px 0 5px;
    &:hover {
        border-bottom: 1px solid ${props => props.theme.colors.primaryShadow};
    }
    &:focus {
        outline: none;
        border-bottom: 1px solid ${props => props.theme.colors.complementary};
    }
    font-size: ${props => props.theme.fontSizes.bodyMobile};
    ${props => props.theme.mediaQueries.tablet} {
        font-size: ${props => props.theme.fontSizes.body};
    }
    transition: all 0.2s ease;
`;

const AddButton = styled.button<{disabled: boolean}>`
    background-color: ${props => props.theme.colors.neutral};
    color: ${props => props.theme.colors.primaryShadow};
    padding: 5px 20px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        background-color: #F8EEBF;
    }
    &:active {
        transform: scale(1.1);
    }
    transition: all 0.2s ease;

    ${props => props.disabled && `
        background-color: #6A6A6A;
        color: #959595;
        &:hover {
            transform: scale(1);
            background-color: #6A6A6A;
        }
    `}
`

const Item = styled.div`
    display: flex;
    align-items: center;
`;

const CancelButton = styled(Button)<{editing: boolean}>`
    opacity: ${props => props.editing ? 1 : 0};
    visibility: ${props => props.editing ? "visible" : "hidden"};
    padding: 5px 15px; 
    font-size: 16px; 
    margin: 0 0 0 5px;
    border: 1px solid ${props => props.theme.colors.neutral}; 
    background-color: transparent;
    &:hover {
        background-color: rgba(255,255,255,0.2);
    }
    ${props => props.theme.mediaQueries.desktop} {
        padding: 5px 15px;
        font-size: 16px;
    }
    transition: opacity 0.2s ease;
`;

const HighlightedText = styled(Body)`
    margin: 0 0 0 10px;
    font-size: 16px;
    ${props => props.theme.mediaQueries.desktop} {
        font-size: 16px;
    }
    color: ${props => props.theme.colors.complementary};
    cursor: pointer;
`;