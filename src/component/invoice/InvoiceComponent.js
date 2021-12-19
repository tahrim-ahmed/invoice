import * as React from 'react';
import Select from '@mui/material/Select';
import {Grid, TextField} from "@mui/material";

const invoice = {
    id: 0,
    clientId: '',
    productId: '',
    quantity: '',
    unitPrice: '',
}

export default function InvoiceComponent() {
    const [values, setValues] = React.useState(invoice);

    return (
        <form>
            <Grid container>
                <Grid item xs={6}>
                    <Select
                        value={values.clientId}
                        label="Select Client"
                        variant="outlined"
                    />
                    <TextField
                        variant="outlined"
                        label="Quantity"
                        value={values.quantity}
                        type="number"
                    />
                    <TextField
                        variant="outlined"
                        label="Unit Price"
                        value={values.unitPrice}
                        type="number"
                    />
                </Grid>
                <Grid item></Grid>
            </Grid>
        </form>
    );
}
