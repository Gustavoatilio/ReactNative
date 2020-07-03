import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import { Input, Label, Button, Text, List, Item,Separator, Content} from 'native-base';
import Todo from '../components/Todo';

class HomeScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            text: '',
            todos: [
                {text: 'Nome do Seu Todo', done : false},
                {text: 'Nome do seu Todo2', done: true},
            ]
        };
    }

    handleChangeText(text){
        this.setState({
            text: text,
        });
    }

    handleOnPress(){
        Alert.alert(
            "Seu Texto",
            this.state.text,
            [{text:'ok',onPress: () => console.log('OK Pressionado')}],
            {cancelar: false},
        );
    }

    addTodo(){
        const todos = this.state.todos.slice();
        const text = this.state.text;
        let test = false;
        if(text == '')
        {
            Alert.alert(
                "Digite um Nome Valido...",
                this.state.text,
                [{text:'ok',onPress: () => console.log('OK Pressionado')}],
                {cancelar: false},
            );
            test = true;
        }
        for (let index = 0; index < todos.length; index++) {
            if(todos[index]['text'] == text && todos[index]['done'] == false)
            {
                Alert.alert(
                    "Existe um Todo com o mesmo Nome...",
                    this.state.text,
                    [{text:'ok',onPress: () => console.log('OK Pressionado')}],
                    {cancelar: false},
                );
            test = true;
            }  
        }
        if(!test){
        this.setState({
            todos: [...todos, {text: text, done: false}],
            text: '',
        });
        }else{
            this.setState({
                text: '',
            })
        }

    }

    toggleTodo(id){
      
        let todos = this.state.todos.slice();
        let test = false;
        for (let index = 0; index < todos.length; index++)
        {
            if(todos[index]['text'] == todos[id]['text'] && 
            todos[id]['done'] == true && 
            todos[index]['done'] == false)
            {
                
                Alert.alert(
                    "O existe um todo aberto ...",
                    this.state.text,
                    [{text:'ok',onPress: () => console.log('OK Pressionado')}],
                    {cancelar: false},
                );
                    test = true;
            }
       }
       
       if(!test){
        todos[id].done = !todos[id].done;
        this.setState({
            todos: todos,
        });
    }
    }

    renderTodos(isDone){
        const todos = this.state.todos.map((todo,id) => {
            if(todo.done == isDone){
                return(
                    <Todo
                    key={id}
                    text={todo.text}
                    done={todo.done}
                    onPress={() => this.toggleTodo(id)}
                    />
                );
            }
        });
        return todos;
    }

    render(){
        return( 
       
        <Content style={style.Container}>
          
            <Item stackedLabel >
                <Label>Digite seu Todo</Label>
                <Input onChangeText={ (text) => this.handleChangeText(text)}  />
            </Item>
            <Button
            onPress={() => this.addTodo()}
            style={style.button}
            rounded dark 
            > 
        <Text>Adicionar</Text>
             </Button>
             <List>
                 <Separator bordered>
                     <Text>To do</Text>
                 </Separator>

                 {this.renderTodos(false)}

                 <Separator bordered>
                     <Text>Done</Text>
                 </Separator>
            
                 {this.renderTodos(true)}

             </List>
             
        </Content>
        
        );
    }
}

const style = StyleSheet.create({
    Container: {
        paddingHorizontal: 20,
    },
    button:{
        marginTop: 10,
    }
});

export default HomeScreen;