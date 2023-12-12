/*
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no.
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo,
che quindi viene aggiunto alla lista dei todo esistenti.
*/


//creo i dati di lavoro
const { createApp } = Vue;

createApp({
    data() {
        return {

            //creo i miei array di oggetti
            todos: [
                {
                text: 'fare i compiti',
                done: false
                },
                {
                text: 'fare la spesa',
                done: true
                },
                {
                text: 'fare il bucato',
                done: false
                }
            ],
            message: "",
            error: false,
        }
    },
    methods: {
        //imposto la funzione che mi permette di cancellare un elemento della lista
        delTask(i) {
            this.todos.splice(i, 1);
        },
        //imposto la funzione che mi permette di aggiungere elementi alla lista attraverso il bottone di aggiunta e l'input
        addTask() {
            if(this.message.length < 5) {
                this.error = true;
            } else {
                this.todos.unshift({text: this.message, done:false});
                this.message = "";
                this.error = false;
            }
        }
    },

}).mount('#app')