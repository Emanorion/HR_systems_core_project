<template>
    <!-- HEADING -->
    <div class="heading">
        <h1>ModernTech Solutions</h1>
        <h3>payslip</h3>
        <p>Pay Date: 31 July 2025</p>
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

    <!-- SIGNATURES -->
    <div>
        <p>Approved by:_________________________</p>
        <p>Recieved by:_________________________</p>
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
    overflow-x: hidden;
}

.heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
}

/* CSS EMPLOYEE INFORMATION */
.emp-info {
    text-align: left;
}

/* CSS TABLES */
.table-wrap {
    width: 80%;
    overflow-x: auto;
}

.earnings-table,
.deductions-table {
    margin: 0 auto;
}

.earnings-table td,
.deductions-table td {
    border-bottom: none;
}

.earnings-table th,
.deductions-table th {
    border-bottom: 1px solid black;
}

.earnings-table,
.deductions-table {
    width: 100%;
    min-width: 750px; 
}
</style>