<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
          <h3>Add Employee</h3>
      </div>
      <div class="card-body">
        <Form
          @submit="handleSubmitForm()"
          :validation-schema="employee"
          v-slot="{ errors }"
        >

          <!-- INÍCIO BLOCO: Employee Name -->
          <div class="form-group">
            <label class="font-weight-bold">Employee Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              class="form-control"
              :class="{ 'is-invalid': errors.name }"
              placeholder="Type Your Name"
              v-model="employee.name"
            />
            <span class="invalid-feedback">{{ errors.name }}</span>
          </div>
          <!-- FIM BLOCO: Employee Name -->

          <!-- INÍCIO BLOCO: Job Role -->
          <div class="form-group">
            <label class="font-weight-bold">Job Role</label>
            <Field
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              :class="{ 'is-invalid': errors.job_role }"
              placeholder="Type Your Job Role"
              v-model="employee.job_role"
            />
            <span class="invalid-feedback">{{ errors.job_role }}</span>
          </div>
          <!-- FIM BLOCO: Job Role -->

          <!-- INÍCIO BLOCO: Salary -->
          <div class="form-group">
            <label class="font-weight-bold">Salary:</label>
            <Field
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              :class="{ 'is-invalid': errors.salary }"
              placeholder="Type Your Salary"
              v-model="employee.salary"
            />
            <span class="invalid-feedback">{{ errors.salary }}</span>
          </div>
          <!-- FIM BLOCO: Salary -->

          <!-- INÍCIO BLOCO: Birth -->
          <div class="form-group">
            <label class="font-weight-bold">Birth:</label>
            <Field
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              :class="{ 'is-invalid': errors.birth }"
              v-model="employee.birth"
            />
            <span class="invalid-feedback">{{ errors.birth }}</span>
          </div>
          <!-- FIM BLOCO: Birth -->

          <!-- INÍCIO BLOCO: Employee Registration -->
          <div class="form-group">
            <label class="font-weight-bold">Employee Registration:</label>
            <Field
              type="text"
              id="employee_registration"
              name="employee_registration"
              class="form-control"
              :class="{ 'is-invalid': errors.employee_registration }"
              placeholder="Type Your Employee Registration"
              v-model="employee.employee_registration"
            />
            <span class="invalid-feedback">{{ errors.employee_registration }}</span>
          </div>
          <!-- FIM BLOCO: Employee Registration -->

          <div class="form-group">
            <button
              class="btn btn-primary"
              type="submit"
            >
              + Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

export default {
  components: {
    Form,
    Field,
  },
  setup() {
    const employee = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      job_role: Yup.string().required('Job Role is required'),
      salary: Yup.string().required('Salary is required'),
      birth: Yup.string().required('Birth is required'),
      employee_registration: Yup.string().required('Employee Registration is required'),
    });

    const handleSubmitForm = (values) => {
      console.log(employee.name);
      // `Sucess ${JSON.stringify(values, null, 4)}`
    };

    return {
      employee,
      handleSubmitForm,
    };
  },
};
</script>
