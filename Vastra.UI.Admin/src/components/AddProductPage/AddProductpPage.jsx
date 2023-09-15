import React, { useState } from 'react';

import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';

import Select from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';

 

const AddProductPage = () => {

  const [productData, setProductData] = useState({

    name: '',

    description: '',

    size: '',

    color: '',

    sku: '',

    price: '',

    image: '',

    quantity: '',

    category: '',

  });

 

  const [errors, setErrors] = useState({});

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

 

  const handleInputChange = (event) => {

    const { name, value } = event.target;

    setProductData({ ...productData, [name]: value });

    validateInput(name, value);

  };

 

  const validateInput = (name, value) => {

    const newErrors = { ...errors };

    switch (name) {

      case 'name':

newErrors.name = value.length === 0 ? 'Name is required' : '';

        break;

      case 'description':

        newErrors.description = value.length === 0 ? 'Description is required' : '';

        break;

      case 'price':

        newErrors.price = isNaN(value) ? 'Price must be a number' : '';

        break;

      case 'quantity':

        newErrors.quantity = isNaN(value) ? 'Quantity must be a number' : '';

        break;

      default:

        break;

    }

 

    setErrors(newErrors);

    setIsButtonDisabled(Object.values(newErrors).some((error) => error.length > 0));

  };

 

  const handleCategoryChange = (event) => {

    setProductData({ ...productData, category: event.target.value });

  };

 

  const handleAddProduct = () => {

    // Handle adding the product here

    console.log('Product data:', productData);

    // Reset form fields

    setProductData({

      name: '',

      description: '',

      size: '',

      color: '',

      sku: '',

      price: '',

      image: '',

      quantity: '',

      category: '',

    });

  };

 

  return (

    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>

      <Grid item xs={12} sm={6}>

        <Paper style={{ padding: '20px' }}>

          <Typography variant="h5" style={{ marginBottom: '20px' }}>

            Add Product

          </Typography>

          <TextField

            label="Name"

            variant="outlined"

            fullWidth

            name="name"

value={productData.name}

            onChange={handleInputChange}

error={!!errors.name}

helperText={errors.name}

          />

          <TextField

            label="Description"

            variant="outlined"

            fullWidth

            name="description"

            value={productData.description}

            onChange={handleInputChange}

            error={!!errors.description}

            helperText={errors.description}

          />

          <TextField

            label="Size"

            variant="outlined"

            fullWidth

            name="size"

            value={productData.size}

            onChange={handleInputChange}

          />

          <TextField

            label="Color"

            variant="outlined"

            fullWidth

            name="color"

            value={productData.color}

            onChange={handleInputChange}

          />

          <TextField

            label="SKU"

            variant="outlined"

            fullWidth

            name="sku"

            value={productData.sku}

            onChange={handleInputChange}

          />

          <TextField

            label="Price"

            variant="outlined"

            fullWidth

            name="price"

            value={productData.price}

            onChange={handleInputChange}

            error={!!errors.price}

            helperText={errors.price}

          />

          <TextField

            label="Image URL"

            variant="outlined"

            fullWidth

            name="image"

            value={productData.image}

            onChange={handleInputChange}

          />

          <TextField

            label="Quantity"

            variant="outlined"

            fullWidth

            name="quantity"

            value={productData.quantity}

            onChange={handleInputChange}

            error={!!errors.quantity}

            helperText={errors.quantity}

          />

          <FormControl fullWidth style={{ marginTop: '20px' }}>

            <InputLabel>Category</InputLabel>

            <Select

              label="Category"

              value={productData.category}

              onChange={handleCategoryChange}

            >

              <MenuItem value="Category 1">Category 1</MenuItem>

              <MenuItem value="Category 2">Category 2</MenuItem>

              {/* Add more categories as needed */}

            </Select>

          </FormControl>

          <Button

            variant="contained"

            color="primary"

            fullWidth

            onClick={handleAddProduct}

            disabled={isButtonDisabled}

            style={{ marginTop: '20px' }}

          >

            Add Product

          </Button>

        </Paper>

      </Grid>

    </Grid>

  );

};

 

export default AddProductPage;