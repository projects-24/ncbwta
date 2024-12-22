import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

function TableList() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const [registeredIndividuals, setRegisteredIndividuals] = useState([
        {
            name: "Ama Asantewaa",
            region: "Ashanti",
            businessType: "Importer",
            categoryOfTrade: "Farm Produce Trader",
            amountPaid: 20,
        },
        {
            name: "Kofi Mensah",
            region: "Greater Accra",
            businessType: "Exporter",
            categoryOfTrade: "Crop Trader (e.g., grains, fruits, vegetables)",
            amountPaid: 20,
        },
        {
            name: "Akosua Boateng",
            region: "Eastern",
            businessType: "Importer",
            categoryOfTrade: "Livestock Trader",
            amountPaid: 20,
        },
        {
            name: "Yaw Appiah",
            region: "Western",
            businessType: "Exporter",
            categoryOfTrade: "Agricultural Input Supplier",
            amountPaid: 20,
        },
    ]);

    const [pendingApprovals, setPendingApprovals] = useState([
        {
            name: "Efua Osei",
            region: "Volta",
            businessType: "Importer",
            categoryOfTrade: "Food Vendor (e.g., restaurants, street food)",
        },
        {
            name: "Kwame Owusu",
            region: "Northern",
            businessType: "Exporter",
            categoryOfTrade: "Artisan (e.g., crafts, repairs)",
        },
    ]);

    const handleApprove = (index) => {
        const approvedUser = pendingApprovals[index];
        setPendingApprovals((prev) =>
            prev.filter((_, i) => i !== index)
        );
        setRegisteredIndividuals((prev) => [
            ...prev,
            { ...approvedUser, amountPaid: 20 },
        ]);
        alert(`${approvedUser.name}'s registration approved.`);
    };

    const totalRevenue = registeredIndividuals.reduce(
        (acc, user) => acc + user.amountPaid,
        0
    );

    const totalRevenueMonth = totalRevenue; // Placeholder: Replace with filtered monthly data
    const totalRevenueYear = totalRevenue; // Placeholder: Replace with filtered yearly data

    return (
        <GridContainer>
            {/* Registered Individuals */}
            <GridItem xs={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Registered Individuals</h4>
                        <p className={classes.cardCategoryWhite}>
                            Includes the total revenue generated from registrations
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={[
                                "Name",
                                "Region",
                                "Business Type",
                                "Category of Trade",
                                "Amount Paid",
                            ]}
                            tableData={registeredIndividuals.map((user) => [
                                user.name,
                                user.region,
                                user.businessType,
                                user.categoryOfTrade,
                                `GHC ${user.amountPaid}`,
                            ])}
                        />
                        <div>
                            <p>
                                <strong>Total Revenue:</strong> GHC {totalRevenue}
                            </p>
                            <p>
                                <strong>Total Revenue (This Month):</strong> GHC {totalRevenueMonth}
                            </p>
                            <p>
                                <strong>Total Revenue (This Year):</strong> GHC {totalRevenueYear}
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </GridItem>

            {/* Pending Approvals */}
            <GridItem xs={12}>
                <Card plain>
                    <CardHeader plain color="primary">
                        <h4 className={classes.cardTitleWhite}>Pending Approvals</h4>
                        <p className={classes.cardCategoryWhite}>
                            Approve pending registrations
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Name", "Region", "Business Type", "Category of Trade", "Action"]}
                            tableData={pendingApprovals.map((user, index) => [
                                user.name,
                                user.region,
                                user.businessType,
                                user.categoryOfTrade,
                                <Button
                                    color="success"
                                    onClick={() => handleApprove(index)}
                                >
                                    Approve
                                </Button>,
                            ])}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

TableList.layout = Admin;

export default TableList;
