import * as React from 'react';
import {Link} from "react-router-dom";
import {itemRef} from '../../../firebase/config';
import {IBoards} from '../../../types/components';
import Loading from '../../modals/modalLoading';
import Board from "./itemBoard";

interface State {
    boards: IBoards[];
    isLoading: boolean;
}

interface Props {

}

class ListBoards extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {boards: [], isLoading: true};
    }

    componentDidMount() {
        itemRef.on("value", (snapshot) => {
            const data = snapshot && snapshot.val() || {};
            let boards = Object.keys(data).map((key) => data[key]);
            this.setState({boards, isLoading: false});
        })
    }

    componentWillUnmount() {
        itemRef.off("value");
    }

    render() {
        return (
            this.state.isLoading ? <Loading isLoading={this.state.isLoading}/> :
                this.state.boards.map((item: IBoards) => {
                    return (
                        <Link
                            style={{textDecoration: "none"}}
                            to={`/board/${item.idBoard}`}
                            key={item.idBoard}>
                            <Board
                                title={item.title}
                                color={item.color}/>
                        </Link>
                    );
                })
        );
    };
}

export default ListBoards;