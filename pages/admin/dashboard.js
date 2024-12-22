import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>group</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Total Registered Traders</p>
                <h3 className={classes.cardTitle}>3,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Updated daily
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>hourglass_empty</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Pending Registrations</p>
                <h3 className={classes.cardTitle}>145</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Action required
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>error_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Expired Registrations</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <AccessTime />
                  Updated 2 hours ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>new_releases</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Newly Registered Traders</p>
                <h3 className={classes.cardTitle}>45</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="info">
                <ChartistGraph
                    className="ct-chart"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Registration Trends</h4>
                <p className={classes.cardCategory}>Last 7 days</p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                    className="ct-chart"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                    listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Trader Activity</h4>
                <p className={classes.cardCategory}>Current month</p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Expired Registrations</h4>
                <p className={classes.cardCategory}>Last 30 days</p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Updated 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
                title="Tasks:"
                headerColor="dark"
                tabs={[
                  {
                    tabName: "Pending Approvals",
                    tabIcon: BugReport,
                    tabContent: (
                        <Tasks
                            checkedIndexes={[0, 2]}
                            tasksIndexes={[0, 1, 2, 3]}
                            tasks={[
                              "Verify trader documents",
                              "Approve pending applications",
                              "Follow up on missing information",
                              "Assign applications to officers",
                            ]}
                        />
                    ),
                  },
                  {
                    tabName: "Trader Activity",
                    tabIcon: Code,
                    tabContent: (
                        <Tasks
                            checkedIndexes={[1]}
                            tasksIndexes={[0, 1, 2]}
                            tasks={[
                              "Review trader activity logs",
                              "Identify inactive traders",
                              "Send reminders for updates",
                            ]}
                        />
                    ),
                  },
                  {
                    tabName: "System Updates",
                    tabIcon: Cloud,
                    tabContent: (
                        <Tasks
                            checkedIndexes={[0, 1]}
                            tasksIndexes={[0, 1, 2, 3]}
                            tasks={[
                              "Update expired registrations",
                              "Add new features for trader analytics",
                              "Fix bugs in the application form",
                              "Test new system updates",
                            ]}
                        />
                    ),
                  },
                ]}
            />
          </GridItem>


          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Trader Summary</h4>
                <p className={classes.cardCategoryWhite}>
                  Detailed stats as of today
                </p>
              </CardHeader>
              <CardBody>
                <Table
                    tableHeaderColor="primary"
                    tableHead={["ID", "Name", "Registration Status", "Country"]}
                    tableData={[
                      ["1", "Fatima Aidoo", "Active", "Ghana"],
                      ["2", "Abena Mensah", "Expired", "Ghana"],
                      ["3", "Sita Coulibaly", "Pending", "Burkina Faso"],
                      ["4", "Esi Kwame", "Active", "Ghana"],
                    ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
