import React from "react";
import {Table, Button, Form, FormGroup, Container, Row, Col} from "react-bootstrap";

class Substituicoes extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            empregadoSubstituidoId: '',
            empregadoSubstitutoId: '',
            dataInicio: '',
            dataFim: '',
            substituicoes: []
        }
    }

    componentDidMount(){
        this.listarSubstituicoes();
    }

    componentWillUnmount(){

    }

    listarSubstituicoes = () => {
        fetch("http://localhost:8080/api/substituicao")
        .then(res => res.json())
        .then(data => {
            this.setState({ substituicoes : data })
        })        
        .catch(error => {
            console.error("Erro na requisição à API:", error);
        });
    }

    submit(){
        const substituicao = {
            empregadoSubstituido: {
                id: this.state.empregadoSubstituidoId
            },
            empregadoSubstituto: {
                id: this.state.empregadoSubstitutoId
            },
            dataInicio: this.state.dataInicio,
            dataFim: this.state.dataFim
        }
        this.cadastrarSubstituicao(substituicao);
    }

    cadastrarSubstituicao = (substituicao) => {
        fetch("http://localhost:8080/api/substituicao", { 
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(substituicao)
        })
        .then(res => {
            if(res.ok){
                this.listarSubstituicoes();
            }
        })       
        .catch(error => {
            console.error("Erro na requisição à API:", error);
            this.listarSubstituicoes();
        }); 
    }

    atualizaEmpregadoSubstituido = (e) => {
        this.setState({
            empregadoSubstituidoId: e.target.value
        })
    }

    atualizaEmpregadoSubstituto = (e) => {
        this.setState({
            empregadoSubstitutoId: e.target.value
        })
    }

    atualizaDataInicio = (e) => {
        this.setState({
            dataInicio: e.target.value
        })
    }

    atualizaDataFim = (e) => {
        this.setState({
            dataFim: e.target.value
        })
    }

    renderForm(){
        return ( 
        <div>           
            <Form>
                <Container className="mt-4">
                    <h4>Cadastrar Substituição</h4>
                    <Row>
                        <Col>
                            <FormGroup controlId="empregadoSubstituidoId">
                                <Form.Label>Empregado Substituído</Form.Label>
                                <Form.Control type="number" placeholder="Digite o ID do Empregado" value={this.state.empregadoSubstituidoId} onChange={this.atualizaEmpregadoSubstituido}/>
                                <Form.Text className="text-muted"></Form.Text>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup controlId="empregadoSubstitutoId">
                                <Form.Label>Empregado Substituto</Form.Label>
                                <Form.Control type="number" placeholder="Digite o ID do Empregado" value={this.state.empregadoSubstitutoId} onChange={this.atualizaEmpregadoSubstituto}/>
                                <Form.Text className="text-muted"></Form.Text>
                            </FormGroup> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup controlId="dataInicio">
                                <Form.Label>Data Inicial</Form.Label>
                                <Form.Control placeholder="AAAA-MM-DD" value={this.state.dataInicio} onChange={this.atualizaDataInicio} />
                                <Form.Text className="text-muted"></Form.Text>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup controlId="dataFim">
                                <Form.Label>Data Final</Form.Label>
                                <Form.Control placeholder="AAAA-MM-DD" value={this.state.dataFim} onChange={this.atualizaDataFim} />
                                <Form.Text className="text-muted"></Form.Text>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button type="submit" onClick={() => this.submit()}> Salvar </Button>
                </Container>             
            </Form>
        </div>
    )}

    renderLista(){
        return ( 
        <div>           
            <Container className="mt-4">
            <h4>Lista de Substituições</h4>
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
                                <td>{substituicao.empregadoSubstituido.nome}</td>
                                <td>{substituicao.empregadoSubstituto.nome}</td>
                                <td>{substituicao.dataInicio}</td>
                                <td>{substituicao.dataFim}</td>
                            </tr>
                        )}

                    </tbody>
                </Table>
            </Container>
        </div>
    )}

    render(){
        return(
            <div>
                <h2>Substituicoes</h2>
                <div>
                    {this.renderForm()}
                </div>
                <div>
                    {this.renderLista()}
                </div>
            </div>
        )
    }

}
export default Substituicoes;