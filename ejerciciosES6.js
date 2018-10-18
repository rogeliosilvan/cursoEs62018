

const inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]

function sumarValue(inventory) {
    
    var reduce = inventory.reduce(function (valorAnterior, valorActual) {
        return {value: valorAnterior.value + valorActual.value};
    });

    console.log(reduce.value);

}

// There are 4 people on the tooling team.
// Their names are Jennie, Ronald, Martin, Anneli. 
// 2 of them have a senior role.

const teamName = "tooling"
const people = [{ name: "Jennie", role: "senior" },
{ name: "Ronald", role: "junior" },
{ name: "Martin", role: "senior" },
{ name: "Anneli", role: "junior" },
{ name: "roge", role: "senior" }]


const writeTemplateString = (teamName, people) => `There are ${people.length} people on the ${teamName} team.
Their names are ${printPeopleMember(people)}
${printPeopleMemberSenior(people).length} of them have a senior role.`

const printPeopleMember = () => people.map(member => member.name).join(', ');
const printPeopleMemberSenior = () => people.filter(member => member.role.trim() === 'senior');


sumarValue(inventory);
console.log(writeTemplateString(teamName, people))