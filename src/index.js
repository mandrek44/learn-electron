
class Program {
    static main() {
        const write = (message) => {
            const body = document.getElementsByTagName("body")[0];
            body.innerHTML += message + "<br />";    
        }

        write("Greetings!");
        write("Hello World!")
    }
}

Program.main();