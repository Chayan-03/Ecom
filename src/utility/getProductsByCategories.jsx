


export const getProductsByCategories = (category,products) => {
    return category.toLowerCase() === 'all' ? products: products?.length > 0 && products.filter(product => product.category.name.toLowerCase() === category.toLowerCase());
}