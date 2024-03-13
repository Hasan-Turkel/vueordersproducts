
import { reactive, ref } from "vue";
import useAxios from "./useAxios"
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';
const useOrderCalls = () => {

  const router = useRouter()
    const data = ref<any[]>([])
    let detailData = reactive({orderDate: "",
    description: "",
    paymentType: "",
    orderDetails: [],
    customerName: "",
    id: ""})
    
    const { axiosSimple } = useAxios()


  // const delBlog = async (id:string) => {
   
  //   try {
  //       const { data } = await axiosWithToken.delete(`api/blogs/${id}/`,
  //   );
  //   toast.success("The blog has been deleted.")
  //   setTimeout(() => {
  //     router.go(-1)
  //   }, 2000);
     
  //   } catch (error) {
  //   toast.error("The blog couldn't be deleted.")
  //   }
  // };

  // const updateBlog = async (values:any, id:any) => {
   
  //   try {
  //       const { data } = await axiosWithToken.put(`/api/blogs/${id}/`,values,
  //       );
  //       toast.success("The blog has been updated.")
      
  //   } catch (error) {
  //     toast.error("The blog couldn't be updated.")
    
  //   }
  // };


  // const sendBlog = async (values:any) => {

  //   try {
  //     const { data } = await axiosWithToken.post(`/api/blogs/`, values, 
  //     );
  //     toast.success("The blog has been created.")

  //     setTimeout(() => {
  //       router.push("/my-blogs")
  //     }, 2000);
     
      
  //     // console.log(data);
  //   } catch (error) {
  //     toast.error("The blog couldn't be created.")
  //   }
  // };

  const getOrders = async () => {

    try {
      const { data:blogs } = await axiosSimple(`orders`
      );
     data.value=blogs
      // console.log(data);
    } catch (error:any) {
      console.log(error);
     
    }
  };


  const getOrder = async (id:string | string[]) => {
    try {
      const { data:order } = await axiosSimple(`orders/${id}`, 
      );
Object.assign(detailData, order)
    } catch (error) {
      // console.log(error);
    }
  };




  return {getOrders, data, detailData, getOrder};
};

export default useOrderCalls;


