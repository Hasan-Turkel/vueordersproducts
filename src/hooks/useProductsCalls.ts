
import { reactive, ref } from "vue";
import useAxios from "./useAxios"
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';
const useProductsCalls = () => {

  const router = useRouter()
    const data = ref<any[]>([])
    let detailData = reactive({name: "",
    price: "",
    createDate: "",
    id: ""})
    
    const { axiosSimple } = useAxios()


  const delProduct = async (id:string) => {
   
    try {
        const { data } = await axiosSimple.delete(`products/${id}/`,
    );
    toast.success("The blog has been deleted.")
    setTimeout(() => {
      router.go(-1)
    }, 2000);
     
    } catch (error) {
    toast.error("The blog couldn't be deleted.")
    }
  };

  // const updateBlog = async (values:any, id:any) => {
   
  //   try {
  //       const { data } = await axiosWithToken.put(`/api/blogs/${id}/`,values,
  //       );
  //       toast.success("The blog has been updated.")
      
  //   } catch (error) {
  //     toast.error("The blog couldn't be updated.")
    
  //   }
  // };


  const sendProduct = async (values:any) => {

    try {
      const { data } = await axiosSimple.post(`/products`, values, 
      );
      toast.success("The product has been created.")

      
      // console.log(data);
    } catch (error) {
      toast.error("The product couldn't be created.")
    }
  };

  const getProducts = async () => {

    try {
      const { data:products } = await axiosSimple(`products`
      );
     data.value=products
      // console.log(data);
    } catch (error:any) {
      console.log(error);
     
    }
  };


  const getProduct = async (id:string | string[]) => {
    try {
      const { data:product } = await axiosSimple(`products/${id}`, 
      );
Object.assign(detailData, product)
    } catch (error) {
      // console.log(error);
    }
  };




  return {getProducts, data, getProduct, detailData, delProduct, sendProduct };
};

export default useProductsCalls;


