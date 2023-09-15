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

 

const AddCategoryPage = () => {

  const [categoryName, setCategoryName] = useState('');

  const [subCategoryName, setSubCategoryName] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('');

  const [isCategoryButtonDisabled, setIsCategoryButtonDisabled] = useState(true);

  const [isSubCategoryButtonDisabled, setIsSubCategoryButtonDisabled] = useState(true);

 

  const handleCategoryNameChange = (event) => {

    setCategoryName(event.target.value);

    setIsCategoryButtonDisabled(event.target.value === '');

  };

 

  const handleSubCategoryNameChange = (event) => {

    setSubCategoryName(event.target.value);

    setIsSubCategoryButtonDisabled(event.target.value === '' || selectedCategory === '');

  };

 

  const handleCategoryAdd = () => {

    // Handle adding a new category here

    console.log(`Added Category: ${categoryName}`);

    setCategoryName('');

    setIsCategoryButtonDisabled(true);

  };

 

  const handleSubCategoryAdd = () => {

    // Handle adding a new sub-category here

    console.log(`Added Sub-Category: ${subCategoryName}, Category: ${selectedCategory}`);

    setSubCategoryName('');

    setSelectedCategory('');

    setIsSubCategoryButtonDisabled(true);

  };

 

  return (

    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>

      <Grid item xs={12} sm={6}>

        <Paper style={{ padding: '20px' }}>

          <Typography variant="h5" style={{ marginBottom: '20px' }}>

            Add Category

          </Typography>

          <TextField

            label="Category Name"

            variant="outlined"

            fullWidth

            value={categoryName}

            onChange={handleCategoryNameChange}

            style={{ marginBottom: '20px' }}

          />

          <Button

            variant="contained"

            color="primary"

            fullWidth

            onClick={handleCategoryAdd}

            disabled={isCategoryButtonDisabled}

          >

            Add

          </Button>

        </Paper>

      </Grid>

 

      <Grid item xs={12} sm={6}>

        <Paper style={{ padding: '20px', marginTop: '20px' }}>

          <Typography variant="h5" style={{ marginBottom: '20px' }}>

            Add Sub Category

          </Typography>

          <TextField

            label="Sub Category Name"

            variant="outlined"

            fullWidth

            value={subCategoryName}

            onChange={handleSubCategoryNameChange}

            style={{ marginBottom: '20px' }}

          />

          <FormControl fullWidth style={{ marginBottom: '20px' }}>

            <InputLabel>Categories</InputLabel>

            <Select

              label="Categories"

              value={selectedCategory}

              onChange={(e) => setSelectedCategory(e.target.value)}

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

            onClick={handleSubCategoryAdd}

            disabled={isSubCategoryButtonDisabled}

          >

            Add

          </Button>

        </Paper>

      </Grid>

    </Grid>

  );

};

 

export default AddCategoryPage;