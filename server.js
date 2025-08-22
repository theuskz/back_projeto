import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post('/criarusuario', async (req, res) => {
  const { nome, email, cargo, url_foto } = req.body;
  try {
    const novoUsuario = await prisma.usuario.create({
      data: { nome, email, cargo, url_foto }
    });
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message }); 
  }
});

app.put('/editarusuario/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, cargo, url_foto } = req.body;

  try {
    const editarUsuario = await prisma.usuario.update({
      where: { id: Number(id) },
      data: { nome, email, cargo, url_foto },
    });
    res.status(200).json(editarUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/listausuarios', async (req, res) => {
  try {
    const listaUsuarios = await prisma.usuario.findMany();
    res.status(200).json(listaUsuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/deletarusuario/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletarUsuario = await prisma.usuario.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ mensagem: 'Usuário apagado com sucesso.', usuario: deletarUsuario });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao apagar o usuário: ' + err.message });
  }
});

app.get('/usuario/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.post('/cadastrarNotebook', async (req, res) => {
  let { modelo, quantidade, disponibilidade } = req.body;

  const disponibilidadeBoolean = disponibilidade.toLowerCase() === 'disponivel';

  try {
    const novoNotebook = await prisma.notebook.create({
      data: {modelo, quantidade, disponibilidade: disponibilidadeBoolean
      }
    });
    res.status(201).json(novoNotebook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/listarNotebooks', async (req, res) => {
  try {
    const notebooks = await prisma.notebook.findMany();

    const notebooksFormatados = notebooks.map
    (notebook => ({notebook,disponibilidade: notebook.disponibilidade ? 'disponivel' : 'não disponivel'
    }));

    res.status(200).json(notebooksFormatados);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/acharNotebook/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const notebook = await prisma.notebook.findUnique({
      where: { id: parseInt(id) }
    });

    if (!notebook) {
      return res.status(404).json({ error: 'Notebook não encontrado.' });
    }

    const notebookFormatado = {...notebook, disponibilidade: notebook.disponibilidade ? 'disponivel' : 'não disponivel'};

    res.status(200).json(notebookFormatado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar o notebook: ' + err.message });
  }
});


app.put('/atualizarNotebook/:id', async (req, res) => {
  const { id } = req.params;
  let { nome, modelo, quantidade, disponibilidade } = req.body;

  if (disponibilidade !== undefined) {
    disponibilidade = disponibilidade.toLowerCase() === 'disponivel';
  }

  try {
    const notebookAtualizado = await prisma.notebook.update({
      where: { id: Number(id) },
      data: {nome, modelo,quantidade,...(disponibilidade !== undefined && { disponibilidade })
      }
    });
    res.status(200).json(notebookAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/deletarNotebook/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletarNotebook = await prisma.notebook.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ mensagem: 'Notebook removido com sucesso.', notebook: deletarNotebook });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover o notebook: ' + err.message });
  }
});

