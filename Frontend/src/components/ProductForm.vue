<template>
    <div class="container">

        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <Form @submit="submitProduct" :validation-schema="productFormSchema">
                    <div class="form-group">
                        <label for="tennc">Tên sản phẩm</label>
                        <Field name="tennc" type="text" class="form-control" v-model="productLocal.tennc" />
                        <ErrorMessage name="tennc" class="error-feedback" />


                    </div>
                    <div class="form-group">
                        <label for="gianc">Giá</label>
                        <Field name="gianc" type="number" class="form-control" v-model="productLocal.gianc" />
                        <ErrorMessage name="gianc" class="error-feedback" />


                    </div>

                    <!-- <div class="form-group">
                        <label for="maloai">Mã loại</label>
                        <Field name="maloai" type="number" class="form-control" v-model="productLocal.maloai" />
                        <ErrorMessage name="maloai" class="error-feedback" />

                    </div>
                    <div class="form-group">
                        <label for="soluong">Số lượng</label>
                        <Field name="soluong" type="number" class="form-control" v-model="productLocal.soluong" />
                        <ErrorMessage name="soluong" class="error-feedback" />

                    </div> -->


                    <div class="form-group">
                        <label for="mota">Mô tả</label>
                        <Field name="mota" type="text" class="form-control" v-model="productLocal.mota" />
                        <ErrorMessage name="mota" class="error-feedback" />

                    </div>
                    <div class="form-group">
                        <label for="image">Hình ảnh (./img/Tên hình)</label>
                        <Field name="image" type="text" class="form-control" v-model="productLocal.image" />
                        <ErrorMessage name="mota" class="error-feedback" />

                    </div>

                    <!-- <div class="form-group">
                        <label for="myfile">Select image:</label>
                        <input type="file" id="myfile" class="form-control-file" v-on:click="getName" @change="onFileSelected"> -->
                        <!-- <Field name="image" type="file" class="form-control" v-model="productLocal.image" /> -->

                    <!-- </div> -->


                    <div class="form-group">
                        <button class="btn btn-primary">Lưu</button>
                        <button type="button" class="ml-2 btn btn-danger" v-if="productLocal.id" @click="deleteProduct">
                            Xóa
                        </button>
                    </div>
                </Form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
<script>
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { generateCodeFrame } from '@vue/shared';
export default {

    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ['submit:product', 'delete:product'],
    props: {
        product: { type: Object, required: true }
    },
    data() {
        const productFormSchema = yup.object().shape({
            tennc: yup
                .string()
                .required('Tên phải có giá trị.'),
            gianc: yup
                .number()
                .min(1),
            // maloai: yup
            //     .number()

            //     .min(1),

            // soluong: yup
            //     .number()

            //     .min(1),
        });
        return {
            // Props are supposed to be immutable, therefore create
            // a local variable contactLocal and bind it to the form
            productLocal: {
               
                ...this.product

            },


        };
    },
    methods: {
        // getName(){
        //     // document.getElementById("myfile").src;
        //     console.log(document.getElementById("myfile").value)
        // },
        submitProduct() {
            this.$emit('submit:product', this.productLocal);
        },
        deleteProduct() {
            this.$emit('delete:product', this.productLocal.id);
        },
        // selectImage () {
        //     this.$refs.fileInput.click()
        // },
        // pickFile () {
        //   let input = this.$refs.fileInput
        //   let file = input.files
        //   if (file && file[0]) {
        //     let reader = new FileReader
        //     reader.onload = e => {
        //       this.previewImage = e.target.result
        //     }
        //     reader.readAsDataURL(file[0])
        //     this.$emit('input', file[0])
        //   }
        // },
    },
};
</script>
<style scoped>
@import '@/assets/form.css';
</style>