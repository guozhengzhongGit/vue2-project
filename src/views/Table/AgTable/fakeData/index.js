const field2HeaderName = {
  id: "ID",
  field_user_name: "姓名",
  field_like: "爱好",
  field_job: "职业",
  field_email: "邮箱",
  field_address: "当前地址",
  field_phone: "联系电话",
  field_user_type: "用户类型",
  field_user_which: "获客来源",
  field_full_job: "是否全职",
  field_user_in: "是否入驻",
  field_user_sign: "是否签约",
  field_which_sign: "认证方式",
  field_submit_times: "提交次数",
  field_get_score: "获取积分",
  field_in_time: "入驻时间",
  field_latest_time: "最近更新时间",
  field_good_at: "擅长领域",
  field_file: "个人附件",
};
let count = 1000;
const editableField = [
  "field_file",
  "field_like",
  "field_email",
  "field_user_type",
  "field_user_sign",
  "field_user_in",
];

const fields = Object.keys(field2HeaderName).map((field) => {
  const item = {
    field,
    field_id: count++,
    colId: count++,
    headerName: field2HeaderName[field],
    editable: false,
    additionalType: {},
  };
  if (editableField.includes(field)) {
    item.editable = true;
  }
  if (field === "field_user_name") {
    item.additionalType = {
      type: 1,
      categories: [
        {
          title: "",
          isSetDefault: false,
          defaultOptions: [],
          options: [{ name: "" }],
        },
      ],
    };
  }
  if (field === "field_like") {
    item.additionalType = {
      type: 1,
      categories: [
        {
          title: "",
          isSetDefault: false,
          defaultOptions: [],
          options: [
            { name: "跑" },
            { name: "跳" },
            { name: "唱" },
            { name: "睡" },
          ],
        },
      ],
    };
  }
  if (
    field === "field_full_job" ||
    field === "field_user_in" ||
    field === "field_user_sign"
  ) {
    item.additionalType = {
      type: 1,
      categories: [
        {
          title: "",
          isSetDefault: false,
          defaultOptions: [],
          options: [{ name: "是" }, { name: "否" }],
        },
      ],
    };
  }
  if (field === "field_user_type") {
    item.additionalType = {
      type: 1,
      categories: [
        {
          title: "",
          isSetDefault: false,
          defaultOptions: [],
          options: [{ name: "免费用户" }, { name: "VIP" }],
        },
      ],
    };
  }
  if (field === "field_which_sign") {
    item.additionalType = {
      type: 1,
      categories: [
        {
          title: "",
          isSetDefault: false,
          defaultOptions: [],
          options: [{ name: "企业微信" }, { name: "钉钉" }, { name: "飞书" }],
        },
      ],
    };
  }
  return item;
});

export { fields };
