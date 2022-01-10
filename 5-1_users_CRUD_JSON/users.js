const fs = require("fs");
const yargs = require("yargs");
// const chalk = require("chalk");
const { v4: uuidv4 } = require("uuid");

const loadUsers = (file) => {
  try {
    const data = JSON.parse(fs.readFileSync(file).toString());
    return data;
  } catch (err) {
    return [];
  }
};

const addUser = (email, name, file) => {
  console.log(email, name, file);
  const users = loadUsers(file);
  const duplicateUser = users.find((user) => user.email === email);
  const id = uuidv4();
  if (!duplicateUser) {
    users.push({
      email,
      name,
      id,
    });
    saveUsers(users, file);
  } else {
    console.log("no duplicates");
  }
};

const removeUser = (id, file) => {
  const users = loadUsers(file);
  const filteredUsers = users.filter((user) => user.id !== id);
  if (filteredUsers.length < users.length) {
    console.log("user removed");
    saveUsers(filteredUsers, file);
  } else {
    console.log("Not found");
  }
};

const listUsers = (file) => {
  const users = loadUsers(file);
  users.forEach((user) => console.log(user.email));
};

const readUser = (id, file) => {
  const users = loadUsers(file);
  const filteredUser = users.find((user) => user.id === id);
  if (filteredUser) {
    console.log(filteredUser.id, filteredUser.email);
  } else {
    console.log("Not found");
  }
};

const saveUsers = (data, file) => {
  const dataJSON = JSON.stringify(data);
  fs.writeFileSync(file, dataJSON);
};

module.exports = { addUser, removeUser, listUsers, readUser };
