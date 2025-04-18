import axios from "axios";
const API_URL = "https://67c4e179c4649b9551b4b949.mockapi.io/Products";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const addProduct = async (product) => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data;
    }
    catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    }
    catch (error) {
        console.error("Error deleting products:", error);
        throw error;
    }
};

export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data;
    }
    catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
}

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        throw error;
    }
};