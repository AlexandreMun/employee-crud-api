<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
          <h3>Add Employee</h3>
      </div>
      <div class="card-body">
        <form
          v-on:submit.prevent="handleSubmitForm()"
        >
          <!-- INÍCIO BLOCO: Employee Name -->
          <div class="form-group">
            <label class="font-weight-bold">Employee Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Type Your Name"
              v-model="employee.name"
            />
            <div class="name-alert"
              v-if="v$.name.$error"
            >
              Name is required!!
              <!-- {{ v$.name.$errors[0].$message }} -->
            </div>
          </div>
          <!-- FIM BLOCO: Employee Name -->

          <!-- INÍCIO BLOCO: Job Role -->
          <div class="form-group">
            <label class="font-weight-bold">Job Role</label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              placeholder="Type Your Job Role"
              v-model="employee.job_role"
            />
            <div class="name-alert"
              v-if="v$.job_role.$error"
            >
              Job Role is required!!
            </div>
          </div>
          <!-- FIM BLOCO: Job Role -->

          <!-- INÍCIO BLOCO: Salary -->
          <div class="form-group">
            <label class="font-weight-bold">Salary:</label>
            <input
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              placeholder="Type Your Salary"
              v-model="employee.salary"
            />
            <div class="name-alert"
              v-if="v$.salary.$error"
            >
              Salary is required!!
            </div>
          </div>
          <!-- FIM BLOCO: Salary -->

          <!-- INÍCIO BLOCO: Birth -->
          <div class="form-group">
            <label class="font-weight-bold">Birth:</label>
            <input
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              v-model="employee.birth"
            />
            <div class="name-alert"
              v-if="v$.birth.$error"
            >
              Birth is required!!
            </div>
          </div>
          <!-- FIM BLOCO: Birth -->

          <!-- INÍCIO BLOCO: Employee Registration -->
          <div class="form-group">
            <label class="font-weight-bold">Employee Registration:</label>
            <input
              type="text"
              id="employee_registration"
              name="employee_registration"
              class="form-control"
              placeholder="Type Your Employee Registration"
              v-model="employee.employee_registration"
            />
            <div class="name-alert"
              v-if="v$.employee_registration.$error"
            >
              Employee Registration is required!!
            </div>
          </div>
          <!-- FIM BLOCO: Employee Registration -->

          <div class="form-group">
            <button
              @click="submitNewEmployee"
              class="btn btn-primary"
            >
              <font-awesome-icon :icon="['fas', 'user-plus']"/> Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import EmployeeService from '../../services/EmployeeService';

export default {
  setup() {
    const employee = reactive({
      name: '',
      job_role: '',
      salary: '',
      birth: '',
      employee_registration: '',
    });

    const rules = computed(() => ({
      name: { required },
      job_role: { required },
      salary: { required },
      birth: { required },
      employee_registration: { required },
    }));

    const v$ = useVuelidate(rules, employee);

    return {
      employee,
      v$,
    };
  },
  methods: {
    handleSubmitForm() {
    },

    async submitNewEmployee() {
      try {
        this.v$.$validate();
        if (this.v$.$error) {
          // console.log('Form Failed Validation!!');
          this.$swal('Oops!', 'You need to include all the required fields!', 'error');
          return;
        }

        await EmployeeService.createNewEmployee(this.employee);
        this.$swal({
          title: 'Employee added successfully!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        }).then((data) => {
          this.$router.push({
            name: 'list',
          });
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
  .name-alert {
    color: rgba(230, 7, 7, 0.863);
  }
</style>
