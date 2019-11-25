import React, { useState, useEffect } from "react";
import styled from "../../theme/styled";
import Body from "../../theme/Body";

const TodoList = ({className}: {className?: string}) => {
    const [ items, setItems ] = useState(new Array<string>());
    const [ inputText, setInputText ] = useState("");
    
    const [ editingValue, setEditingValue ] = useState(undefined as {index: number, value: string})
    useEffect(() => {
        setEditingValue(undefined);
    }, [items])
    return (
        <Container className={className}>
            <Flex>
                <Input type="text" placeholder="Type" value={inputText} onChange={e => setInputText(e.target.value)}/>
                <AddButton onClick={_ => setItems([inputText, ...items])}>Add</AddButton>
            </Flex>
            <FlexColumn>
                {
                    items.map((item, i) =>
                        editingValue && editingValue.index === i ? (
                            <Item key={i}>
                                • <Input type="text" key={i} value={editingValue.value} onChange={e => setEditingValue({...editingValue, value: e.target.value})}/>
                                <HighlightedText onClick={() => setItems(items.map((it, ind) => i === ind ? editingValue.value : it)) }>Save</HighlightedText>
                                <HighlightedText onClick={() => setItems(items.filter((it, ind) => i !== ind))}>Delete</HighlightedText>
                            </Item>
                        )
                            :
                        <Item key={i} onClick={() => setEditingValue({index: i, value: item})}>• {item}</Item>
                    )
                }
            </FlexColumn>
        </Container>
    )

}

export default TodoList;

const Container = styled.div`
    background-color: ${p => p.theme.colors.primaryDarkTint};
    padding: 20px;
`;

const Flex = styled.div`
    display: flex;
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
    &:focus {
        outline: none;
    }
    font-size: ${props => props.theme.fontSizes.bodyMobile};
    ${props => props.theme.mediaQueries.tablet} {
        font-size: ${props => props.theme.fontSizes.body};
    }
    
`;

const AddButton = styled.button`
    background-color: ${props => props.theme.colors.neutral};
    color: ${props => props.theme.colors.primaryShadow};
    padding: 5px 20px;
    border-radius: 100px;
    border: none;
    &:focus {
        outline: none;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
`;

const HighlightedText = styled(Body)`
    margin: 0 0 0 10px;
    color: ${props => props.theme.colors.complementary};
`;