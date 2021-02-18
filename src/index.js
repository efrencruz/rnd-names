const messages = ["Miguel", "Pedro", "Samuel", "Alan", "Francisco", "Memo"];

const randomName = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
} 

module.exports = { randomName }
