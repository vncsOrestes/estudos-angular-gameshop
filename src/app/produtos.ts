export interface IProduto  {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
};

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
};

export const produtos: IProduto[] = [
    {id: 1, descricao: "Mouse Gamer", preco: 439.00, descricaoPreco: "À vista do PIX", quantidadeEstoque: 15, imagem: "./assets/mouse-1.jpg"},
    {id: 2, descricao: "Monitor Full HD 4K", preco: 1200.50, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/monitor-1.jpg"},
    {id: 3, descricao: "Teclado Gamer", preco: 749.99, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/teclado-1.jpg"},
    {id: 4, descricao: "Fone Gamer FPS", preco: 599.99, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/fone-1.jpg"},
    {id: 5, descricao: "Fone de Ouvido", preco: 299.99, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/fone-2.jpg"},
    {id: 6, descricao: "Fone de Ouvido S/F", preco: 399.99, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/fone-3.jpg"},
    {id: 7, descricao: "HD 1TB", preco: 1000, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/hd-1.jpg"},
    {id: 8, descricao: "Combo Placa de Vídeo", preco: 18449.99, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/combo-1.jpg"},
    {id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/ryzen-1.jpg"},
    {id: 10, descricao: "Notebook Simples", preco: 2500, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/notebook-1.jpg"},
    {id: 11, descricao: "Notebook Gamer", preco: 4500, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/notebook-2.jpg"},
    {id: 12, descricao: "Mouse Simples", preco: 20, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/mouse-2.jpg"},
    {id: 13, descricao: "Mouse Bluetooth", preco: 200, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/mouse-3.jpg"},
    {id: 15, descricao: "Mouse Pequeno", preco: 50, descricaoPreco: "À vista do PIX", quantidadeEstoque: 10, imagem: "./assets/mouse-4.jpg"}
];