<script setup lang="ts">
interface ButtonProps {
  disable?: boolean;
  color?: string | "primary" | "blue" | "red" | "green" | "orange";
}

withDefaults(defineProps<ButtonProps>(), {
  disable: false,
  color: "primary",
});
</script>

<template>
  <button :disabled="disable" :class="['button', `button-${color}`]">
    <slot />
  </button>
</template>

<style scoped>
/* Classe per il bottone */
.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Classe per il bottone con colore rosso */
.button-red {
  background-color: var(--red);
  color: #fff;
  border: 1px solid var(--red);
}

/* Stile del bottone al passaggio del mouse */
.button-red:hover {
  background-color: #ff6666; /* Tonalità più chiara del rosso */
  border: 1px solid #ff6666;
}

/* Stile del bottone disabilitato con colore rosso */
.button-red:disabled {
  background-color: #ffc0c0; /* Tonalità più chiara del rosso per il bottone disabilitato */
  border: 1px solid #ffc0c0;
  color: #ff0000;
  cursor: not-allowed;
}

/* Classe per il bottone con colore arancione */
.button-orange {
  background-color: var(--orange);
  color: #fff;
  border: 1px solid var(--orange);
}

/* Stile del bottone al passaggio del mouse */
.button-orange:hover {
  background-color: #ffcc66; /* Tonalità più chiara dell'arancione */
  border: 1px solid #ffcc66;
}

/* Stile del bottone disabilitato con colore arancione */
.button-orange:disabled {
  background-color: #ffd699; /* Tonalità più chiara dell'arancione per il bottone disabilitato */
  border: 1px solid #ffd699;
  color: #ffa500;
  cursor: not-allowed;
}

/* Classe per il bottone con colore blu */
.button-blue {
  background-color: var(--blue);
  color: #fff;
  border: 1px solid var(--blue);
}

/* Stile del bottone al passaggio del mouse */
.button-blue:hover {
  background-color: #6666ff; /* Tonalità più chiara del blu */
  border: 1px solid #6666ff;
}

/* Stile del bottone disabilitato con colore blu */
.button-blue:disabled {
  background-color: #c6c6ff; /* Tonalità più chiara del blu per il bottone disabilitato */
  border: 1px solid #c6c6ff;
  color: #0000ff;
  cursor: not-allowed;
}

/* Classe per il bottone con colore verde */
.button-green {
  background-color: var(--green);
  color: #fff;
  border: 1px solid var(--green);
}

/* Stile del bottone al passaggio del mouse */
.button-green:hover {
  background-color: #33cc33; /* Tonalità più chiara del verde */
  border: 1px solid #33cc33;
}

/* Stile del bottone disabilitato con colore verde */
.button-green:disabled {
  background-color: #a5d6a7; /* Tonalità più chiara del verde per il bottone disabilitato */
  border: 1px solid #a5d6a7;
  color: #008000;
  cursor: not-allowed;
}

/* Classe per il bottone con colore primario */
.button-primary {
  background-color: var(--primary);
  color: #fff;
  border: 1px solid var(--primary);
}

/* Stile del bottone al passaggio del mouse */
.button-primary:hover {
  background-color: #0056b3; /* Tonalità più scura del colore primario */
  border: 1px solid #0056b3;
}

/* Stile del bottone disabilitato con colore primario */
.button-primary:disabled {
  background-color: #b4c9ff; /* Tonalità più chiara del colore primario per il bottone disabilitato */
  border: 1px solid #b4c9ff;
  color: #007bff;
  cursor: not-allowed;
}
</style>
