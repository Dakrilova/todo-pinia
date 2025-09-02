import { defineStore } from "pinia";
import { ref, watch, computed } from "vue";
import uniqid from 'uniqid';

export interface ITodo {
    id: string,
    text: string,
    completed: boolean
}

export const useTodoStore = defineStore('todoStore', () => {
    const todoState = ref<ITodo[]>([])

    const todoActiveList = computed(() => {
        const todo = todoState.value.filter((item: ITodo) => item.completed === false)
        return todo
    })


    const todoArchiveList = computed(() => {
        const todo = todoState.value.filter((item: ITodo) => item.completed === true)
        return todo
    })

    function addTodo(title: string){
        const todo: ITodo = {
            id: uniqid(),
            text: title,
            completed: false
        }
        todoState.value.push(todo);
    }

    function removeTodo(id: string) {
        todoState.value = todoState.value.filter((item: ITodo) => item.id !== id);
    }


    function toggleTodo(id: string) {
        todoState.value.map((item: ITodo) => {
            if (item.id === id) {
                item.completed = !item.completed
            }
        });
    }

    function getTodo() {
        const saved = localStorage.getItem("todo");
        if (saved) {
            todoState.value = JSON.parse(saved);
        }
    }

    function saveTodo() {
        localStorage.setItem("todo", JSON.stringify(todoState.value));
    }


    function clearState() {
        todoState.value = []
    }

    watch(() => todoState.value,() => {
        console.log('save')
        saveTodo()
    }, {deep: true})

    return {
        todoState, todoActiveList, todoArchiveList, addTodo, removeTodo, toggleTodo, getTodo, saveTodo
    }
})