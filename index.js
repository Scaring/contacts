const contacts = require("./contacts");
const { program } = require('commander');

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const list = await contacts.listContacts();
            console.log(list);
            break;

        case "get":
            const contact = await contacts.getContactById(id);
            console.log(contact);
            break;

        case "add":
            const added = await contacts.addContact(name, email, phone);
            console.log(added);
            break;

        case "remove":
            const deleted = await contacts.removeContact(id);
            console.log(deleted);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(options);

// const app = async () => {
//     const data = await contacts.listContacts();
//     console.log(data);
// };

// const app = async () => {
//     const data = await contacts.removeContact("vza2RIzNGIwutCVCs4mCL");
//     console.log(data);
// };

// const app = async () => {
//     const data = await contacts.getContactById("vza2RIzNGIwutCVCs4mCL");
//     console.log(data);
// };

// const app = async () => {
//     const data = await contacts.addContact("Chaim Lewis", "dui.in@egetlacus.ca" , "(294) 840-6685");
//     console.log(data);
// };

