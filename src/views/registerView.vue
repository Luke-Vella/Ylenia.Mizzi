<script setup lang="ts">
import { ref } from "vue";

import ButtonComponent from "primevue/button";
import Divider from "primevue/divider";
import Card from "primevue/card";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import Password from "primevue/password";

import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";

import { useRouter } from "vue-router";
const router = useRouter();

const resolver = ref(
  zodResolver(
    z.object({
      username: z.string().min(1, { message: "Username is required." }),
      email: z.string().min(1, { message: "Email is required." }),
      firstName: z.string().min(1, { message: "First Name is required." }),
      lastName: z.string().min(1, { message: "Last Name is required." }),
      password: z.string().min(1, { message: "Password is required." }),
      confirmPassword: z
        .string()
        .min(1, { message: "Confirm Password is required." }),
    })
  )
);
const initialValues = ref({
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
});

function backToIndexClicked() {
  router.push("/login");
}

function onFormSubmit() {
  alert("Success!");
}
</script>

<template>
  <div class="grow flex items-center justify-center">
    <Card>
      <template #title>
        <div class="text-center text-2xl">Create an Account</div>
      </template>

      <template #content>
        <Divider />

        <Form
          v-slot="$form"
          :resolver="resolver"
          :initialValues="initialValues"
          @submit="onFormSubmit"
          class="registration-form p-1"
        >
          <!-- USERNAME -->
          <div class="flex flex-col mb-4">
            <FloatLabel variant="on">
              <InputText
                name="username"
                class="w-full"
                type="text"
                placeholder="Username"
                fluid
              />
              <label for="on_label">Username</label>
            </FloatLabel>

            <Message
              v-if="$form.username?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.username.error?.message }}</Message
            >
          </div>

          <!-- EMAIL -->
          <div class="flex flex-col my-4">
            <FloatLabel variant="on">
              <InputText
                name="email"
                class="w-full"
                type="text"
                placeholder="Email"
                fluid
              />
              <label for="on_label">Email</label>
            </FloatLabel>

            <Message
              v-if="$form.email?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.email.error?.message }}</Message
            >
          </div>

          <div class="flex my-4">
            <!-- FIRST NAME -->
            <div class="flex flex-col mr-4">
              <FloatLabel variant="on">
                <InputText
                  name="firstName"
                  style="width: 180px"
                  type="text"
                  placeholder="First Name"
                  fluid
                />
                <label for="on_label">First Name</label>
              </FloatLabel>

              <Message
                v-if="$form.firstName?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >{{ $form.firstName.error?.message }}</Message
              >
            </div>

            <!-- LAST NAME -->
            <div class="flex flex-col">
              <FloatLabel variant="on">
                <InputText
                  name="lastName"
                  style="width: 180px"
                  type="text"
                  placeholder="Last Name"
                  fluid
                />
                <label for="on_label">Last Name</label>
              </FloatLabel>

              <Message
                v-if="$form.lastName?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >{{ $form.lastName.error?.message }}</Message
              >
            </div>
          </div>

          <div class="flex my-4">
            <!-- PASSWORD -->
            <div class="flex flex-col mr-3">
              <FloatLabel variant="on">
                <Password
                  name="password"
                  style="width: 180px"
                  :toggleMask="true"
                  :feedback="true"
                  fluid
                />
                <label for="on_label">Password</label>
              </FloatLabel>

              <Message
                v-if="$form.password?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >{{ $form.password.error?.message }}</Message
              >
            </div>

            <!-- CONFIRM PASSWORD -->
            <div class="flex flex-col">
              <FloatLabel variant="on">
                <Password
                  name="confirmPassword"
                  style="width: 180px"
                  :toggleMask="true"
                  :feedback="false"
                  fluid
                />
                <label for="on_label">Confirm Password</label>
              </FloatLabel>

              <Message
                v-if="$form.confirmPassword?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >{{ $form.confirmPassword.error?.message }}</Message
              >
            </div>
          </div>

          <Divider />

          <!-- LOGIN BUTTONS -->
          <div class="flex flex-col">
            <div class="flex flex-wrap gap-4 justify-center">
              <ButtonComponent
                severity="secondary"
                label="Back to Login"
                @click="backToIndexClicked"
              />
              <ButtonComponent
                severity="primary"
                label="Submit"
                type="submit"
              />
            </div>
          </div>
        </Form>
      </template>
    </Card>
  </div>
</template>
