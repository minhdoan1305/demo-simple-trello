import * as React from 'react';
import styled from 'styled-components';
import {BeatLoader} from 'react-spinners';

const ModalLoading = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

const ModalLoadingContent = styled.div`
    margin: 5% auto;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
`

interface Props {
    isLoading: boolean;
}

export default class Loading extends React.Component<Props> {
    render() {
        return (
            <ModalLoading>
                <ModalLoadingContent>
                    <BeatLoader
                        size={15}
                        margin={"3px"}
                        color={"#0072ff"}
                        loading={this.props.isLoading}/>
                </ModalLoadingContent>
            </ModalLoading>
        );
    };
}