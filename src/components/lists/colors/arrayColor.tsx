import * as React from 'react';
import styled from 'styled-components';
import color from '../../../constants/color';
import Box from './itemColor';

const List = styled.div`
    justify-content: center;
`

class ListBox extends React.Component {
    render() {
        return (
            <List>
                {color.map((item: string, index: number) => {
                    return (
                        <Box key={index} bgColor={item}/>
                    );
                })}
            </List>
        );
    };
}

export default ListBox;