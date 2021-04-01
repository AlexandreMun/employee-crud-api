<template>
  <div class="row justify-content-center">
    <h3 class="text-center">List All Employees</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">Employee Name</th>
          <th class="text-center">Job Role</th>
          <th class="text-center">Salary</th>
          <th class="text-center">Birth</th>
          <th class="text-center">Employee Registration</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.employee_id">
          <td>{{ employee.name }}</td>
          <td>{{ employee.job_role }}</td>
          <td>{{ employee.salary }}</td>
          <td>{{ employee.birth }}</td>
          <td>{{ employee.employee_registration }}</td>
          <td>
            <router-link
              :to="{ name: 'update', params: { id: employee.employee_id }}"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'user-edit']"/> Edit
            </router-link>
          </td>
          <td>
            <button @click="removeEmployee(employee.employee_id)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']"/> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import EmployeeService from '../../services/EmployeeService';

export default {
  data() {
    onMounted(() => {
      this.listAllEmployees();
    });

    return {
      employees: [],
    };
  },
  methods: {
    async listAllEmployees() {
      const response = await EmployeeService.getEmployees();
      this.employees = response;
    },
    async removeEmployee(id) {
      this.$swal({
        title: 'Are you sure you want to delete the employee?',
        text: 'Watch out! This Employee will be deleted!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes! Please, delete it!',
      }).then(async (result) => {
        if (result.value) {
          await EmployeeService.deleteEmployee(id);
          this.$swal('Deleted', 'Sucessfully Deleted', 'success');
          this.listAllEmployees();
        } else {
          this.$swal('Cancelled', 'Cancel Deletion', 'info');
        }
      });
    },
  },
};
</script>

<style lang="">

</style>
