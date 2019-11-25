import React, { useState, useEffect } from "react";
import styled from "../../theme/styled";
import Body from "../../theme/Body";

const UglyTodoList = ({className}: {className?: string}) => {
    const [ items, setItems ] = useState(new Array<string>());
    const [ inputText, setInputText ] = useState("");
    
    const [ editingValue, setEditingValue ] = useState(undefined as {index: number, value: string})
    useEffect(() => {
        setEditingValue(undefined);
    }, [items])
    return (
        <Container className={className} style={{height: "300px", overflow: "scroll"}}>
            <Flex>
                <input type="text" placeholder="Type" value={inputText} onChange={e => setInputText(e.target.value)}/>
                <button onClick={_ => setItems([...items, inputText])}>Add</button>
            </Flex>
            <table style={{overflowY: "scroll"}}>
                <tbody>
                    <col style={{width: "70%"}} />
                    <col style={{width: "30%"}} />
                    <tr>
                        <th>Todo Item</th>
                        <th>Actions</th>
                    </tr>
                    {
                        items.map((item, i) =>
                            editingValue && editingValue.index === i ? (
                                <tr key={i}>
                                    <td>
                                        <Input type="text" key={i} value={editingValue.value} onChange={e => setEditingValue({...editingValue, value: e.target.value})}/>
                                    </td>
                                    <td>
                                        <button onClick={() => setEditingValue(undefined)}>Cancel</button>
                                        <button onClick={() => setItems(items.map((it, ind) => i === ind ? editingValue.value : it))}>Save</button>
                                    </td>
                                </tr>
                            )
                                :
                            <tr key={i}>
                                <td>{item}</td>
                                <td>
                                    <button onClick={() => setEditingValue({index: i, value: item})}>Edit</button>
                                    <button onClick={() => setItems(items.filter((it, ind) => i !== ind))}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                
            </table>
        </Container>
    )

}

export default UglyTodoList;

const Container = styled.div`
    background-color: white;
    padding: 20px;
    font-family: serif;
`;

const Flex = styled.div`
    display: flex;
`

const Input = styled.input`
`;