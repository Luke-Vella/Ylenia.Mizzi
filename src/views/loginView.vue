<script setup lang="ts">
import { ref } from "vue";

import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";

import ButtonComponent from "primevue/button";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Card from "primevue/card";
import Divider from "primevue/divider";
import Message from "primevue/message";

import { useRouter } from "vue-router";

const router = useRouter();

const resolver = ref(
  zodResolver(
    z.object({
      username: z.string().min(1, { message: "Username is required." }),
      password: z.string().min(1, { message: "Password is required." }),
    })
  )
);
const initialValues = ref({
  username: "",
  password: "",
});

function onFormSubmit() {
  alert("Success!");
}

function registerClicked() {
  router.push("/register");
}

function loginClicked() {
  router.push("/login");
}

function forgotPasswordClicked() {
  router.push("/forgotPassword");
}
</script>

<template>
  <div class="grow flex items-center justify-center">
    <Card>
      <template #title>
        <div class="text-center text-2xl p-2">Piano Unite Login</div></template
      >
      <template #content>
        <Divider />

        <div class="flex justify-center flex-col gap-4">
          <!-- LOGIN FORM STARTS HERE -->
          <Form
            v-slot="$form"
            :resolver="resolver"
            :initialValues="initialValues"
            @submit="onFormSubmit"
            class="login-form p-2"
          >
            <!-- USERNAME -->
            <div class="flex flex-col m-3">
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

            <!-- PASSWORD -->
            <div class="flex flex-col m-3">
              <FloatLabel variant="on">
                <Password
                  name="password"
                  placeholder="Password"
                  :toggleMask="true"
                  :feedback="false"
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

            <Divider />

            <!-- LOGIN BUTTONS -->
            <div class="flex flex-col">
              <div class="flex flex-wrap gap-4 justify-center">
                <ButtonComponent
                  severity="secondary"
                  icon="pi pi-user-plus"
                  label="Create Account"
                  @click="registerClicked"
                />
                <ButtonComponent
                  icon="pi pi-sign-in"
                  severity="primary"
                  label="Login"
                  type="submit"
                  @click="loginClicked"
                />
              </div>

              <div class="flex justify-center">
                <ButtonComponent
                  @click="forgotPasswordClicked"
                  label="Forgot Password?"
                  variant="link"
                />
              </div>
            </div>
          </Form>
        </div>
      </template>
    </Card>
  </div>
</template>
