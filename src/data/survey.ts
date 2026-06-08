import type { SurveySection } from "../types/survey";

export const ratingOptions = [
  { value: "very-poor", label: "سيء" },
  { value: "poor", label: "ضعيف" },
  { value: "fair", label: "مقبول" },
  { value: "good", label: "جيد" },
  { value: "very-good", label: "جيد جداً" },
];

export const yesNoOptions = [
  { value: "yes", label: "نعم" },
  { value: "no", label: "لا" },
];

export const respondentOptions = [
  { value: "patient", label: "المريض" },
  { value: "parent-guardian", label: "أحد الوالدين / المسؤول عن رعاية المريض" },
  { value: "other", label: "شخص آخر" },
];

export const waitingDurationOptions = [
  { value: "0-10", label: "من 0 إلى 10 دقائق" },
  { value: "10-20", label: "من 10 إلى 20 دقيقة" },
  { value: "30-40", label: "من 30 إلى 40 دقيقة" },
  { value: "50-plus", label: "50 دقيقة فأكثر" },
];

export const lowRatingValues = ["very-poor", "poor"];

export function getWaitingDurationAnswerId(questionId: string) {
  return `${questionId}_waiting_duration`;
}

export function shouldShowWaitingDuration(answerValue?: string) {
  return Boolean(answerValue && lowRatingValues.includes(answerValue));
}

export const surveySections: SurveySection[] = [
  {
    id: "basic",
    title: "أسئلة أساسية",
    subtitle: "معلومات عامة قبل البدء باستبيان رضا المرضى المنومين",
    questions: [
      { id: "respondent", text: "من الذي يقوم بالإجابة على هذا الاستبيان؟", type: "respondent", required: true },
      { id: "first_admission", text: "هل كانت هذه أول إقامة لك في المستشفى؟", type: "yesNo", required: true },
      { id: "admitted_through_er", text: "خلال إقامتك هذه بالمستشفى، هل دخلت إلى هذا المستشفى عن طريق غرفة الطوارئ؟", type: "yesNo", required: true },
    ],
  },
  {
    id: "admission",
    title: "دخول المستشفى",
    subtitle: "تقييم إجراءات الدخول والتعامل أثناء إدخالك للمستشفى",
    questions: [
      { id: "admission_speed", text: "سرعة إجراءات الدخول إلى المستشفى", type: "rating", required: true, waitingDurationOnLowRating: true },
      { id: "admission_courtesy", text: "اهتمام الشخص الذي قام بإدخالك إلى المستشفى", type: "rating", required: true },
    ],
  },
  {
    id: "room",
    title: "الغرفة",
    subtitle: "تقييم الغرفة من حيث المظهر والنظافة والراحة",
    questions: [
      { id: "room_appearance", text: "المظهر العام للغرفة", type: "rating", required: true },
      { id: "room_cleanliness", text: "نظافة الغرفة", type: "rating", required: true },
      { id: "room_temperature", text: "درجة حرارة الغرفة", type: "rating", required: true },
      { id: "room_noise", text: "هدوء الغرفة وما حولها", type: "rating", required: true },
    ],
  },
  {
    id: "meals",
    title: "الوجبات",
    subtitle: "تقييم جودة الطعام ودرجة حرارته",
    questions: [
      { id: "food_temperature", text: "درجة حرارة الطعام، برودة الأطعمة الباردة وسخونة الأطعمة الساخنة", type: "rating", required: true },
      { id: "food_quality", text: "جودة الطعام", type: "rating", required: true },
    ],
  },
  {
    id: "nurses",
    title: "فريق التمريض",
    subtitle: "تقييم تعامل فريق التمريض واستجابتهم واهتمامهم بك",
    questions: [
      { id: "nurses_friendliness", text: "لطف واهتمام فريق التمريض", type: "rating", required: true },
      { id: "call_button_promptness", text: "سرعة الاستجابة لزر الاستدعاء", type: "rating", required: true, waitingDurationOnLowRating: true },
      { id: "nurses_attitude_requests", text: "أسلوب فريق التمريض تجاه طلباتك", type: "rating", required: true },
      { id: "nurses_special_needs", text: "مدى مراعاة فريق التمريض لاحتياجاتك الخاصة أو الشخصية", type: "rating", required: true },
      { id: "nurses_kept_informed", text: "حرص فريق التمريض بإطلاعك على ما يجري", type: "rating", required: true },
      { id: "nurses_skill", text: "مهارة فريق التمريض", type: "rating", required: true },
      { id: "daily_personal_care", text: "المساعدة التي حصلت عليها للرعاية اليومية مثل الاستحمام، استخدام الحمام / المبولة، المشي، وغيرها", type: "rating", required: true },
    ],
  },
  {
    id: "physician",
    title: "الطبيب",
    subtitle: "تقييم الوقت والاهتمام والشرح ومهارة الطبيب",
    questions: [
      { id: "physician_time", text: "الوقت الذي قضاه الطبيب معك", type: "rating", required: true },
      { id: "physician_questions_concern", text: "اهتمام الطبيب بأسئلتك ودواعي قلقك", type: "rating", required: true },
      { id: "physician_kept_informed", text: "حرص الطبيب بإطلاعك على ما يجري", type: "rating", required: true },
      { id: "physician_friendliness", text: "لطف واهتمام الطبيب", type: "rating", required: true },
      { id: "physician_skill", text: "مهارة الطبيب", type: "rating", required: true },
    ],
  },
  {
    id: "tests_treatments",
    title: "الاختبارات والعلاج",
    subtitle: "تقييم مدة الانتظار والشرح والتعامل أثناء الاختبارات والعلاج",
    questions: [
      { id: "tests_waiting", text: "فترة الانتظار للاختبارات والعلاج", type: "rating", required: true, waitingDurationOnLowRating: true },
      { id: "tests_explanations", text: "الشرح عن ما سيحدث خلال الاختبارات والعلاج", type: "rating", required: true },
      { id: "blood_draw_courtesy", text: "اهتمام الشخص الذي قام بسحب عينة الدم", type: "rating", required: true },
    ],
  },
  {
    id: "personal_issues",
    title: "أمور شخصية",
    subtitle: "تقييم الخصوصية والسيطرة على الألم والاستجابة لاحتياجاتك",
    questions: [
      { id: "staff_privacy", text: "مراعاة الموظفين لخصوصيتك", type: "rating", required: true },
      { id: "pain_control", text: "مدى السيطرة على شعورك بالألم", type: "rating", required: true },
      { id: "emotional_needs", text: "استجابة موظفي المستشفى لاحتياجاتك المعنوية", type: "rating", required: true },
      { id: "complaints_response", text: "الاستجابة للمخاوف والشكاوى التي أعربت عنها خلال إقامتك", type: "rating", required: true },
      { id: "involved_decisions", text: "الجهد الذي بذله الموظفون لإشراكك في القرارات الخاصة بعلاجك", type: "rating", required: true },
      { id: "staff_introduction", text: "تعريف الموظفين بأنفسهم لك", type: "rating", required: true },
      { id: "hand_hygiene", text: "مراعاة الطاقم الطبي لتعقيم أيديهم قبل فحصك", type: "rating", required: true },
      { id: "medications_informed", text: "مدى إطلاعك على جميع الأدوية التي أخذتها في المستشفى", type: "rating", required: true },
    ],
  },
  {
    id: "visitors_family",
    title: "الزوار والعائلة",
    subtitle: "تقييم راحة الزوار وتعامل الموظفين معهم",
    questions: [
      { id: "visitor_comfort", text: "تجهيزات وراحة الزوار", type: "rating", required: true },
      { id: "staff_attitude_visitors", text: "أسلوب الموظفين تجاه الزوار", type: "rating", required: true },
    ],
  },
  {
    id: "discharge",
    title: "الخروج من المستشفى",
    subtitle: "تقييم جاهزيتك للخروج والتعليمات التي حصلت عليها",
    questions: [
      { id: "ready_discharge", text: "مدى شعورك بالاستعداد للخروج من المستشفى", type: "rating", required: true },
      { id: "discharge_speed", text: "سرعة إجراءات الخروج من المستشفى بعد إخبارك بأنه بإمكانك العودة إلى المنزل", type: "rating", required: true, waitingDurationOnLowRating: true },
      { id: "home_care_instructions", text: "التعليمات التي حصلت عليها بشأن العناية بنفسك في المنزل", type: "rating", required: true },
      { id: "medicine_after_discharge", text: "الشرح عن الأدوية التي ستأخذها بعد الخروج، بما في ذلك الأعراض الجانبية المحتملة", type: "rating", required: true },
    ],
  },
  {
    id: "overall",
    title: "التقييم العام",
    subtitle: "تقييمك النهائي لتجربة الرعاية داخل المستشفى",
    questions: [
      { id: "staff_teamwork", text: "مدى تعاون الموظفين في تقديم الرعاية لك", type: "rating", required: true },
      { id: "recommend_hospital", text: "احتمالية أن توصي بهذه المستشفى للآخرين", type: "rating", required: true },
      { id: "overall_care_rating", text: "تقييمك العام للرعاية التي تلقيتها في المستشفى", type: "rating", required: true },
      { id: "comments", text: "تعليقات: صف التجارب الجيدة أو السيئة", type: "textarea", required: false },
    ],
  },
];
