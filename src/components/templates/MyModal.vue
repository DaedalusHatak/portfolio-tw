<script>
  export default {
    name: 'modal',
props:['link'],
    methods: {
        proceed(){
this.$emit('proceed');
        },
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
         Are you sure?

        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          You are about to leave this page. Are You sure?
        </slot>
       </section>
       <footer class="justify-end  gap-5 modal-footer">
         
           
            <button
              type="button"
              class="btn-green"
              @click="proceed"
            >
              Confirm
          </button>
            <button
              type="button"
              class="btn-green"
              @click="close"
            >
              Cancel
          </button>
        
      </footer>
    </div>
  </div>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    border-radius: 15px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,.modal-body,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header,.modal-body {
    border-bottom: 1px solid #eeeeee;
    color: #242424;
    justify-content: space-between;
  }





  .btn-green {
    color: white;
    padding:8px;
    background: #F26C4F;
    border: 1px solid #F26C4F;
    border-radius: 8px;
  }
</style>
