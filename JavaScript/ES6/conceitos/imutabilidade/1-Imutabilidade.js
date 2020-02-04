const user = {
    name: "Guilherme",
    lastName: "costa"
};

function getNameWithFullName(user){
    return{
        user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getNameWithFullName(user);

console.log(userWithFullName);