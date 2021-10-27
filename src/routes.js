const express = require('express');
const routes = express.Router();

const usuarios = [
  {
      id: 0,
      nome: "Julia Tarchi",
  },
];

const livros = [
    {
      id: 0, 
      capa: "/images/Sapiens 1.png", 
      titulo: "Sapiens",
      autor: "Yuval Noah Harari ",
      categoria: "Sociopolítica"
    },
    {
      id: 1,
      capa: "/images/AdmirávelMundoNovo.jpg", 
      titulo: "Admirável Mundo Novo",
      autor: "Aldoux Huxley",
      categoria: "Ficção científica"
    },
    {
      id: 2,
      capa: "/images/ClaroEnigma.jpg", 
      titulo: "Claro Enigma",
      autor: "Carlos Drummond de Andrade",
      categoria: "Poesia"
    },
    {
      id: 3,
      capa: "/images/Ritalee (1) 1 (1).png", 
      titulo: "Rita lee: uma autobiografia",
      autor: "Rita lee",
      categoria: "Biografia"
    },
    {
      id: 4,
      capa: "/images/capa-diana 1 (1).png", 
      titulo: "Diana: Sua verdadeira historia",
      autor: "Andrew Morton",
      categoria: "Biografia"
    },
    {
      id: 5,
      capa: "/images/capa-nelson mandela.jpg", 
      titulo: "A cor da liberdade: Os anos de presidencia",
      autor: "Mandla Langa e Nelson Mandela",
      categoria: "Biografia"
    },
    {
      id: 6,
      capa: "/images/capa-o milagre da manhã.jpg", 
      titulo: "O milagre da manhã",
      autor: "Hall Elrod",
      categoria: "Psicologia e religião"
    },
    {
      id: 7,
      capa: "/images/Cortiço 1.png", 
      titulo: "O cortiço",
      autor: "Aluísio Azevedo",
      categoria: "Clássicos brasileiros"
    },
    {
      id: 8,
      capa: "/images/Dom Casmurro 1.png", 
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      categoria: "Clássicos brasileiros"
    },
    {
      id: 9,
      capa: "/images/quartodedespejo.jpg", 
      titulo: "Quarto de despejo",
      autor: "Carolina Maria de Jesus",
      categoria: "Clássicos brasileiros"
    },
    {
      id: 10,
      capa: "/images/PippiMeialonga.jpg", 
      titulo: "Pippi Meialonga",
      autor: "Astrid Lindgren",
      categoria: "Infantil"
    },
    {
      id: 11,
      capa: "/images/Scrum.jpg", 
      titulo: "Scrum: a arte de fazer o dobro do trabalho na metade do tempo",
      autor: "Jeff Sutherland",
      categoria: "Gestão e finanças"
    },
    {
      id: 12,
      capa: "/images/PedagogiaDaAutonomia.jpg", 
      titulo: "Pedagogia da Autonomia",
      autor: "Paulo Freire",
      categoria: "Educação"
    },
    {
      id: 13,
      capa: "/images/Metamorfose 1.png", 
      titulo: "A metamorfose",
      autor: "Franz Kafka",
      categoria: "Clássicos estrangeiros"
    },
    {
      id: 14,
      capa: "/images/OsMiseráveis.jpg", 
      titulo: "Os miseráveis",
      autor: "Victor Hugo",
      categoria: "Clássicos estrangeiros"
    },
    {
      id: 15,
      capa: "/images/crimeecastigo.jpg", 
      titulo: "Crime e castigo",
      autor: "Fiodor Dostoievski",
      categoria: "Clássicos estrangeiros"
    },
    {
      id: 16,
      capa: "/images/OsHomensQueNao.jpg", 
      titulo: "Os homens que não amavam as mulheres",
      autor: "Stieg Larsson",
      categoria: "Suspense"
    },
    {
      id: 17,
      capa: "/images/capa-a seleção 1.png", 
      titulo: "A seleção",
      autor: "Kierra Cass",
      categoria: "Romance"
    },
    {
      id: 18,
      capa: "/images/Morrodosventosuivantes 1.png", 
      titulo: "O morro dos ventos uivantes",
      autor: "Emily Brontë",
      categoria: "Romance"
    },
    {
      id: 19,
      capa: "/images/capa- a culpa é das estrelas.jpg", 
      titulo: "A culpa é das estrelas ",
      autor: "John Green",
      categoria: "Romance"
    }

  ];

routes.get("/user", (req, res) => {
    const query = req.query;
    consoçe.log(query);

    res.status(200).json("usuarios");
});

routes.post("/user", (req, res) => {
    const newUser = req.body

    usuarios.push(newUser);

    res.status(200).json({ message: "Sucess" });
});

routes.put("/user:userId", (req, res) => {
    const { userId } = req.params;
    const newFIelds = req.body;

    let selectedIndex = index;
    let selected = usuarios.find((user, index) => {
        selectedIndex =index;
        return user.id == userId;
    });
    selected = {...selected, ...newFIelds};
    
    usuarios[selectedIndex] = selected;

    res.status(200).json({ message: "Sucess" });
});




routes.get("/books", (req, res) => {
    const query = req.query;
    consoçe.log(query);

    res.status(200).json("livros");
});

routes.post("/books", (req, res) => {
    const newLivro = req.body

    livros.push(newLivro);

    res.status(200).json({ message: "Sucess" });
});

routes.put("/books:livroId", (req, res) => {
    const { livroId } = req.params;
    const newFIelds = req.body;

    let selectedIndex = index;
    let selected = livros.find((livro, index) => {
        selectedIndex =index;
        return livro.id == livroId;
    });
    selected = {...selected, ...newFIelds};
    
    livros[selectedIndex] = selected;

    res.status(200).json({ message: "Sucess" });
});



module.exports = routes;