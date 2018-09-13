import * as React from 'react';
import styled from 'styled-components';
import ListBoards from './lists/boards/arrayBoard';
import CreateNewBoard from './buttons/buttonBoard/buttonShowAddBoard';
import ModalCreateBoard from './modals/modalCreateBoard';

const GridView = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 130px;
    gap: 15px 15px;
    margin: 50px 30px;
`

class Body extends React.Component {
    render() {
        return (
            <div>
                <GridView>
                    <ListBoards/>
                    <CreateNewBoard/>
                </GridView>
                <ModalCreateBoard/>
            </div>
        );
    };
}

export default Body;