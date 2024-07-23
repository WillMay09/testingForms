class UserStorage{

    constructor(){
        this.storage = {}
        this.id = 0;


    }

    addUser({firstName, lastName}){

        const id = this.id;
        this.storage[id] = {id, firstName, lastName};
        this.id++;


    }

    getUsers(id){

        return Object.values(this.storage);
    }

    updateUser(id, {firstName, lastName}) {
        this.storage[id] = { id, firstName, lastName };
      }

      deleteUser(id) {
        delete this.storage[id];
      }


}

module.exports = UsersStorage();