import { defineStore } from 'pinia';

export const useTodoStore = defineStore("todoStore", {
    state: () => ({
        item: String,
    }),
    getters:{
        todo__list__complete(){
            return this.state.filter((el) => el.isCompleted);
        }
    },
    actions: {

    }
    
})
