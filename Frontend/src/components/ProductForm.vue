<template>
    <Form @submit="submitProduct" :validation-schema="productFormSchema">
        <div class="form-group">
            <label for="tennc">Tên sản phẩm</label>
            <Field name="tennc" type="text" class="form-control" v-model="productLocal.tennc" />
            <ErrorMessage name="name" class="error-feedback" />

            />
        </div>
        <div class="form-group">
            <label for="gianc">Giá</label>
            <Field name="gianc" type="number" class="form-control" v-model="productLocal.gianc" />
            <ErrorMessage name="phone" class="error-feedback" />

            />
        </div>

        <div class="form-group">
            <label for="maloai">Mã loại</label>
            <Field name="maloai" type="number" class="form-control" v-model="productLocal.maloai" />
            <ErrorMessage name="phone" class="error-feedback" />
            />
        </div>

        <div class="form-group">
            <label for="mota">Mô tả</label>
            <Field name="mota" type="text" class="form-control" v-model="productLocal.mota" />
            <ErrorMessage name="address" class="error-feedback" />
            />
        </div>

        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button type="button" class="ml-2 btn btn-danger" v-if="productLocal.id" @click="deleteProduct">
                Xóa
            </button>
        </div>
    </Form>

</template>
<script>
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';
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
            name: yup
                .string()
                .required('Tên phải có giá trị.')
                .min(2, 'Tên phải ít nhất 2 ký tự.')
                .max(50, 'Tên có nhiều nhất 50 ký tự.'),
           
            address: yup.string().max(100, 'Địa chỉ tối đa 100 ký tự.'),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+(\d{8})\b)/g,
                    'Giá không hợp lệ.'
                ),
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
        submitProduct() {
            this.$emit('submit:product', this.productLocal);
        },
        deleteProduct() {
            this.$emit('delete:product', this.productLocal.id);
        },
    },
};
</script>
<style scoped>
@import '@/assets/form.css';
</style>