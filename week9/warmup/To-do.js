class Todo {
  constructor(id,description){
    this.id = id
    this.des = description
  }

  getTodo(){
    return {id: this.id , description: this.des}
  }

  setDescription(newDes){
    this.des  === newDes
  }

}

const td1 = new Todo(100,"Driving")
console.log(td1.getTodo())
td1.setDescription("Pooping")
console.log(td1.getTodo())