<template>
    <div class="return-btn"></div>
    <!-- HEADING -->
    <div class="page">
        <div class="heading-top">
            <h1>ModernTech Solutions</h1> <br>
            <h3>PAYSLIP</h3>
            <p style="font-weight: 400; font-size: 20px;">Pay Date: 31 July 2025</p> <br> <br>
        </div>

        <div v-if="employee">
            <!-- EMPLOYEE INFORMATION -->
            <div class="emp-info">
                <p>Employee name: {{ employee.name }}</p>
                <p>ID Number: </p>
                <p>Bank Details: </p>
                <p>Tax Number: </p>
            </div>
            <br>

            <!-- EARNINGS TABLE -->
            <div class="tables">
                <div class="table-wrap">
                    <table class="earnings-table">
                        <thead>
                            <tr>
                                <th>Earnings</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Basic</td>
                                <td>R-amount</td>
                            </tr>
                            <tr>
                                <td>Bonus</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td>Total Earnings</td>
                                <td>R-amount</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br> <br>

                <!-- DEDUCTIONS TABLE -->
                <div class="table-wrap">
                    <table class="deductions-table">
                        <thead>
                            <tr>
                                <th>Deductions</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Deductions</td>
                                <td>R-amount</td>
                            </tr>
                            <tr>
                                <td>Taxes</td>
                                <td>R-amount</td>
                            </tr>
                            <tr>
                                <td>Total Deductions</td>
                                <td>R-amount</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> <br> <br> <br>
    

        <!-- SIGNATURES -->
        <div class="signatures">
            <p>Approved by:_________________________</p>
            <p>Recieved by:_________________________</p>
        </div>
    </div>
</template>

<script>
import payrollData from '@/data/payrollData';

export default {
    data() {
        return {
            payrollData,
            employee: null
        }
    },
    created() {
        // runs automatically on component creation
        const employeeId = parseInt(this.$route.params.id)
        this.employee = this.payrollData.find(emp => emp.employeeId === employeeId)
    }
}
</script>

<style>
body {
    margin: 0;
}

.page {
    max-width: 100%;
    padding: 20px;
}

.heading-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    max-width: 100%;
    background-color: transparent;
}

/* CSS EMPLOYEE INFORMATION */
.emp-info {
    text-align: left;
    font-size: 25px;
}

/* CSS TABLES */
.table-wrap {
    width: 100%;
    overflow-x: auto;
}

.earnings-table,
.deductions-table {
    margin: 0 auto;
    font-size: 20px;
    width: 100%;

}

.earnings-table td,
.deductions-table td {
    border-bottom: none;
    font-weight: 200;
    text-align: left;
}

.earnings-table th,
.deductions-table th {
    border-bottom: 1px solid black;
}

.signatures {
    display: flex;
    justify-content: space-evenly;
    gap: 100px;
    flex-wrap: wrap;
}

.signatures p {
    font-weight: 400;
    font-size: 22px;
}
</style>