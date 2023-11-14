import React from "react";
import {Table} from "react-bootstrap";

class Substituicoes extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            substituicoes: [
                {'empregadoSubstituido':'Maria', 'empregadoSubstituto':'Joao', 'dataInicio':'10/10/2023', 'dataFim':'10/12/2023'}
            ]
        }
    }
    render(){
        return(
            <div>
                <h2>Substituicoes</h2>
                <div>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Empregado Substituído</th>
                                <th>Empregado Substituto</th>
                                <th>Data Início</th>
                                <th>Data Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.substituicoes.map((substituicao) => 
                                <tr>
                                    <td>{substituicao.empregadoSubstituido}</td>
                                    <td>{substituicao.empregadoSubstituto}</td>
                                    <td>{substituicao.dataInicio}</td>
                                    <td>{substituicao.dataFim}</td>
                                </tr>
                            )}

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }

}
export default Substituicoes;