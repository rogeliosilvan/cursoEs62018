let projects = [
    {
        project: 'project 1',
        groups: [
            {
                name: 'group1',
                groups: [
                    {
                        name: 'group1.1',
                        groups: []
                    },
                    {
                        name: 'group1.2',
                        groups: [
                            {
                                name: 'group1.2.1',
                                groups: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        project: 'project 2',
        groups: [
            {
                name: 'group2',
<<<<<<< HEAD
=======
                groups: []
            }
        ]
    }
  ]

let projects2 = [
    {
        project: 'project 1',
        groups: [
            {
                name: 'group1',
                groups: [
                    {
                        name: 'group1.1',
                        groups: [
                            {
                                name: 'group1.1.1',
                                groups: [
                                    {
                                        name: 'group1.1.1.1',
                                        groups: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'group1.2',
                        groups: [
                            {
                                name: 'group1.2.1',
                                groups: [
                                    {
                                        name: 'group1.2.1.1',
                                        groups: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'group1.3',
                        groups: [
                            {
                                name: 'group1.3.1',
                                groups: [
                                    {
                                        name: 'group1.3.1.1',
                                        groups: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        project: 'project 2',
        groups: [
            {
                name: 'group2',
>>>>>>> ba96621d98b07123b9374d59b75cd3188086f67f
                groups: [
                    {
                        name: 'group2.1',
                        groups: []
                    }
                ]
            }
        ]
    }
]

var nombreProyectos = [];
<<<<<<< HEAD
=======
// var una = "";
// var splitUna = [];
>>>>>>> ba96621d98b07123b9374d59b75cd3188086f67f

function normalizeGroupV2(projects) {
    

    for (let i = 0; i < projects.length; i++) {
        nombreProyectos.push({
            project: projects[i].project,
            groups: nombreGrupo(projects[i].groups),
        })

<<<<<<< HEAD
        una = "";
    }
}

var acumGrupo = "";
var una =[];

function nombreGrupo(grupos) {
    var nombreGrupo2 = [];

    for (let i = 0; i < grupos.length; i++) {
        nombreGrupo2.push(grupos[i].name)
        // console.log("name_____");
        // console.log(grupos[i].name);
        // console.log("grupo_____");
        // console.log(grupos[i].groups.length);
        if (grupos[i].groups.length)
        {
            //guardarlo en una variable y juntarlo en un arrya
            console.log("Hay mas grupos. Vuelvo a llamar......");
            una = una.concat(nombreGrupo(grupos[i].groups));
            
            
        }

        console.log("acumulo nombre");
        console.log(una);
        nombreGrupo2.push(una);
            
        
        

=======
        // una = "";
        // splitUna = [];
    }
}



function nombreGrupo(grupos) {
    var nombreGrupo2 = [];
    

    for (let i = 0; i < grupos.length; i++) {
        nombreGrupo2.push(grupos[i].name)

        if (grupos[i].groups.length)
        {
            var una = "";
            var splitUna = [];
            //guardarlo en una variable y juntarlo en un arrya
            // console.log("Hay mas grupos. Vuelvo a llamar......");
            // una = una.concat(nombreGrupo(grupos[i].groups));
            una += nombreGrupo(grupos[i].groups);
            splitUna = una.split(',');
            console.log(una);
            console.log(splitUna);
            // nombreGrupo2 = nombreGrupo2.concat(splitUna);
            nombreGrupo2 = [...nombreGrupo2, ...splitUna];
        }

>>>>>>> ba96621d98b07123b9374d59b75cd3188086f67f
    }

    return nombreGrupo2;
}


// function extraerGrupos(grupos) {

//     return grupos.map(function (group) {

//         if (!group.groups.length)
//             return group.name
//         else
//             return extraerGrupos(group.groups)

//     })
// }

function extraerGrupos(grupos) {
<<<<<<< HEAD

    return grupos.map(function (group) {
        console.log(group.groups.length);
        console.log(group.name);
        var tmpName = [];
        // return group.name
        if (!group.groups.length) {
            console.log("devuelve grupo");
            tmpName.push(group.name);
            console.log(tmpName);
            return group.name
        }

        extraerGrupos(group.groups);

    })
=======
    

    return grupos.map(function (group) {

        var nombreGrupo2 = [];
        nombreGrupo2.push(group.name)
        // return group.name
        if (group.groups.length) {
            console.log("devuelve grupo");

            var una = "";
            var splitUna = [];
            una += extraerGrupos(group.groups);
            splitUna = una.split(',');
            console.log("una");
            console.log(una);
            console.log("splitUna");
            console.log(splitUna);
            return nombreGrupo2.concat(splitUna);
        }

        return nombreGrupo2;

    })

>>>>>>> ba96621d98b07123b9374d59b75cd3188086f67f
}

function normalizeGroup(projects) {
    

    let nuevoObj = projects.map(function (project) { return { 
        project: project.project,
        groups: extraerGrupos(project.groups)
     }});

    console.log(nuevoObj);
    
}

<<<<<<< HEAD
// normalizeGroup(projects);
=======
//normalizeGroup(projects);
>>>>>>> ba96621d98b07123b9374d59b75cd3188086f67f
normalizeGroupV2(projects);

console.log(nombreProyectos)