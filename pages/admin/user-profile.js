import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
};

function UserRegistration() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const [businessRegistered, setBusinessRegistered] = React.useState("");
    const [businessType, setBusinessType] = React.useState("");
    const [savingsAccount, setSavingsAccount] = React.useState("");

    return (
        <div>
            <GridContainer>
                <GridItem xs={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>User Registration</h4>
                            <p className={classes.cardCategoryWhite}>
                                Please fill in all required fields
                            </p>
                        </CardHeader>
                        <CardBody>
                            {/* Personal Information */}
                            <h5>Personal Information</h5>
                            <GridContainer>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Surname"
                                        id="surname"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Middle Name"
                                        id="middle-name"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Other Name"
                                        id="other-name"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Tel Number"
                                        id="tel-number"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Date of Birth"
                                        id="date-of-birth"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Place of Birth"
                                        id="place-of-birth"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Place of Residence"
                                        id="place-of-residence"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="House Number"
                                        id="house-number"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Ghana Card Number"
                                        id="ghana-card-number"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Name of Municipal Assembly"
                                        id="municipal-assembly"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Electoral Area"
                                        id="electoral-area"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Name of Queen Mother"
                                        id="queen-mother-name"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                            </GridContainer>

                            {/* Business Registration */}
                            <h5>Business Registration</h5>
                            <GridContainer>
                                <GridItem xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Have you registered your business?</InputLabel>
                                        <Select
                                            value={businessRegistered}
                                            onChange={(e) => setBusinessRegistered(e.target.value)}
                                        >
                                            <MenuItem value="Yes">Yes</MenuItem>
                                            <MenuItem value="No">No</MenuItem>
                                        </Select>
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Business Name"
                                        id="business-name"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="TIN Number"
                                        id="tin-number"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Business Type</InputLabel>
                                        <Select
                                            value={businessType}
                                            onChange={(e) => setBusinessType(e.target.value)}
                                        >
                                            <MenuItem value="Importer">Importer</MenuItem>
                                            <MenuItem value="Exporter">Exporter</MenuItem>
                                        </Select>
                                    </FormControl>
                                </GridItem>
                            </GridContainer>

                            {/* Categories */}
                            <h5>Categories</h5>
                            <p>
                                Select one or more categories that best describe your trading
                                activities.
                            </p>
                            <GridContainer>
                                <GridItem xs={12}>
                                    <CustomInput
                                        labelText="E.g., Agricultural Traders, Food Vendors"
                                        id="categories"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                            </GridContainer>

                            {/* Savings Account */}
                            <h5>Savings Account</h5>
                            <GridContainer>
                                <GridItem xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Do you have a savings account?</InputLabel>
                                        <Select
                                            value={savingsAccount}
                                            onChange={(e) => setSavingsAccount(e.target.value)}
                                        >
                                            <MenuItem value="Yes">Yes</MenuItem>
                                            <MenuItem value="No">No</MenuItem>
                                        </Select>
                                    </FormControl>
                                </GridItem>
                            </GridContainer>

                            {/* Applicant Declaration */}
                            <h5>Applicant's Declaration</h5>
                            <p>
                                I hereby declare the following:
                                <ol>
                                    <li>
                                        Agreement to the Constitution, Bylaws, and Rules of the
                                        Association.
                                    </li>
                                    <li>
                                        Willingness to comply with the Association’s rules and
                                        regulations.
                                    </li>
                                    <li>
                                        Understanding that membership is subject to approval by the
                                        Executive Committee.
                                    </li>
                                    <li>
                                        Agreement to pay registration and membership dues.
                                    </li>
                                    <li>
                                        Understanding of membership benefits and Association
                                        policies.
                                    </li>
                                    <li>
                                        Declaration of truth and accuracy of information provided.
                                    </li>
                                    <li>
                                        Authorization for the Association to verify the
                                        information.
                                    </li>
                                    <li>
                                        Understanding of consequences for breach of the
                                        Association’s code of conduct.
                                    </li>
                                    <li>
                                        Agreement to uphold the objectives and values of the
                                        Association.
                                    </li>
                                    <li>
                                        Acknowledgment of the declaration as a binding agreement.
                                    </li>
                                </ol>
                            </p>

                            {/* Applicant's Information */}
                            <h5>Applicant's Information</h5>
                            <GridContainer>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Name"
                                        id="applicant-name"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Address"
                                        id="applicant-address"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Phone"
                                        id="applicant-phone"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Email"
                                        id="applicant-email"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                            </GridContainer>

                            {/* Guarantor Form */}
                            <h5>Guarantor Form for Sub-Association Head</h5>
                            <GridContainer>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Applicant Name"
                                        id="guarantor-applicant-name"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Sub-Association Head Name"
                                        id="guarantor-head-name"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Title"
                                        id="guarantor-title"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Market"
                                        id="guarantor-market"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Phone"
                                        id="guarantor-phone"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <CustomInput
                                        labelText="Email"
                                        id="guarantor-email"
                                        formControlProps={{ fullWidth: true }}
                                    />
                                </GridItem>
                            </GridContainer>

                            <p>
                                Guarantor Declaration:
                                <ol>
                                    <li>
                                        Confirmation of knowledge of the applicant and their
                                        business.
                                    </li>
                                    <li>
                                        Guarantee of the accuracy of the applicant's information.
                                    </li>
                                    <li>
                                        Assurance that the applicant adheres to the Association's
                                        rules and regulations.
                                    </li>
                                </ol>
                            </p>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Submit Registration</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}

UserRegistration.layout = Admin;

export default UserRegistration;
