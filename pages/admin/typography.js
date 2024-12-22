import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

function RegistrationRenewal() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [renewalMonths, setRenewalMonths] = useState("");

  const users = [
    {
      name: "Faustina Akurugu",
      region: "Greater Accra",
      category: "Agricultural Traders",
      businessType: "Importer",
    },
    {
      name: "Elikplim Nathan",
      region: "Ashanti Region",
      category: "Service Traders",
      businessType: "Exporter",
    },
    {
      name: "Kwame Appiah",
      region: "Western Region",
      category: "Manufacturing Traders",
      businessType: "Importer",
    },
  ];

  const handleRenewClick = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleRenew = () => {
    if (!renewalMonths) {
      alert("Please select the number of months for renewal.");
      return;
    }
    alert(
        `Registration for ${selectedUser.name} has been renewed for ${renewalMonths} months.`
    );
    setOpenModal(false);
  };

  return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Registration Renewal</h4>
              <p className={classes.cardCategoryWhite}>
                List of users available for renewal
              </p>
            </CardHeader>
            <CardBody>
              <Table
                  tableHeaderColor="primary"
                  tableHead={[
                    "Name",
                    "Region",
                    "Category of Trade",
                    "Business Type",
                    "Action",
                  ]}
                  tableData={users.map((user) => [
                    user.name,
                    user.region,
                    user.category,
                    user.businessType,
                    <Button color="success" onClick={() => handleRenewClick(user)}>
                      Renew
                    </Button>,
                  ])}
              />
            </CardBody>
          </Card>
        </GridItem>

        {/* Renewal Modal */}
        <Dialog open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle>Renew Registration</DialogTitle>
          <DialogContent>
            {selectedUser && (
                <>
                  <p>
                    <strong>Name:</strong> {selectedUser.name}
                  </p>
                  <p>
                    <strong>Region:</strong> {selectedUser.region}
                  </p>
                  <p>
                    <strong>Category:</strong> {selectedUser.category}
                  </p>
                  <p>
                    <strong>Business Type:</strong> {selectedUser.businessType}
                  </p>
                  <FormControl fullWidth>
                    <InputLabel>Renewal Duration (Months)</InputLabel>
                    <Select
                        value={renewalMonths}
                        onChange={(e) => setRenewalMonths(e.target.value)}
                    >
                      <MenuItem value={1}>1 Month</MenuItem>
                      <MenuItem value={3}>3 Months</MenuItem>
                      <MenuItem value={6}>6 Months</MenuItem>
                      <MenuItem value={12}>12 Months</MenuItem>
                    </Select>
                  </FormControl>
                </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModal(false)} color="danger">
              Cancel
            </Button>
            <Button onClick={handleRenew} color="success">
              Renew
            </Button>
          </DialogActions>
        </Dialog>
      </GridContainer>
  );
}

RegistrationRenewal.layout = Admin;

export default RegistrationRenewal;
