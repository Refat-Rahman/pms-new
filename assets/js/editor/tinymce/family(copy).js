tinymce.init({
  selector: 'textarea.image-tools',
  height: 500,
  plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
  imagetools_cors_hosts: ['picsum.photos'],
  menubar: 'file edit view insert format tools table help',
  toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
  toolbar_sticky: true,
  autosave_ask_before_unload: true,
  autosave_interval: "30s",
  autosave_prefix: "{path}{query}-{id}-",
  autosave_restore_when_empty: false,
  autosave_retention: "2m",
  image_advtab: true,
});

document.querySelector('.addButtonf').addEventListener('click', function () {
  const familyContainer = document.getElementById('familyContainer');

  const newFamilyColumn = document.createElement('div');
  newFamilyColumn.classList.add('family-column');

  const colMd12 = document.createElement('div');
  colMd12.classList.add('col-md-12');

  const formGroupRow = document.createElement('div');
  formGroupRow.classList.add('form-group', 'row');

  const inputCol = document.createElement('div');
  inputCol.classList.add('col-sm-2');

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.classList.add('form-control');
  inputField.placeholder = 'পরিবারের তথ্য';

  const editorCol = document.createElement('div');
  editorCol.classList.add('col-sm-10');

  const editorContainer = document.createElement('div');
  editorContainer.classList.add('editorContainer');

  const editor = document.createElement('div');
  editor.classList.add('mb-2', 'editor', 'card', 'card-body');

  const textarea = document.createElement('textarea');
  textarea.classList.add('image-tools');


  const collapseCol = document.createElement('div');
  collapseCol.classList.add('col-md-12');

  const formGroupRowCollapse = document.createElement('div');
  formGroupRowCollapse.classList.add('form-group', 'row');

  const collapseButtonCol = document.createElement('div');
  collapseButtonCol.classList.add('col-sm-12', 'text-right');

  const collapseButton = document.createElement('button');
  collapseButton.classList.add('btn', 'btn-link');
  collapseButton.type = 'button';
  collapseButton.setAttribute('data-toggle', 'collapse');
  collapseButton.setAttribute('data-target', `#collapseSection${familyContainer.children.length + 1}`);
  collapseButton.setAttribute('aria-expanded', 'false');
  collapseButton.textContent = 'জাতীয় পরিচয়পত্র সংক্রান্ত তথ্য';

  const collapsibleSection = document.createElement('div');
  collapsibleSection.classList.add('collapse');
  collapsibleSection.id = `collapseSection${familyContainer.children.length + 1}`;


  // Replace this section with your provided collapsible code
  collapsibleSection.innerHTML = `
  <div class="form-group row">
  <div class="col-md-6 pd">
  <label class="form-label">মোবাইল নাম্বার</label>
  <div class="d-flex">
    <input type="text" class="form-control" data-language="en" style="margin-right: 1%;" />
    <button class="btn btn-secondary" type="button" id="searchbtn1">
      <i class="fa fa-search"></i> 
    </button>
  </div>
</div>
  <div class="d-flex">
    <div class="col-md-2 pd">
      <img src="assets/images/mirza_1.png" alt="" srcset="" width="115px">
    </div>
    <div class="form-group row">
      <div class="col-md-4 pd">
        <label class="form-label">পূর্ণ নাম (ইংরেজি)</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-md-4 pd">
        <label class="form-label">পূর্ণ নাম (বাংলা)</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-md-4 pd">
        <label class="form-label">এন আইডি নাম্বার</label>
        <input type="number" class="form-control" />
      </div>
      <div class="col-md-4 pd">
        <label class="form-label">ডিজিটাল নাম্বার</label>
        <input type="number" class="form-control" />
      </div>
      <div class="col-md-4 pd">
        <label class="form-label">জন্ম তারিখ</label>
        <input type="number" class="form-control" />
      </div>
      <div class="col-md-4 pd">
        <label class="form-label">ব্লাড গ্রুপ</label>
        <input type="text" class="form-control" />
      </div>
    </div>
  </div>

  <div class="col-md-3 pd">
    <label class="form-label">পেশা</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-md-3 pd">
    <label class="form-label">পিতা</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-md-3 pd">
    <label class="form-label">মাতা</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-md-3 pd">
    <label class="form-label">স্ত্রী/স্বামী</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-md-6 pd">
    <label class="form-label">বর্তমান ঠিকানা</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-md-6 pd">
    <label class="form-label">স্থায়ী ঠিকানা</label>
    <input type="text" class="form-control" />
  </div>

</div>


<!------------------------------------ano nid--------------------------------------->

<h4 class="card-title" id="form-group" style="font-size: 15px;text-decoration: underline;">
  মোবাইল
  নাম্বার হতে প্রাপ্ত অন্য এনআইডি</h4>
<input type="checkbox" id="toggleMessage-n" name="NID" value="num">
<div class="form-sample" id="box-n" style="display: none;">
  <div class="form-group row">
    <div class="col-md-6 pd">
      <label class="form-label">এন আইডি নাম্বার</label>
      <input type="number" class="form-control" />
    </div>
    <div class="col-md-6 pd">
      <label class="form-label">জন্ম তারিখ</label>
      <div class="default-datepicker" style="display: flex;">
        <input type="text" class="datepicker-here  form-control" data-language="en"
          style="margin-right: 1%;" />
        <button class="btn btn-secondary" type="button" id="searchbtn1">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>

    <div class="d-flex">
      <div class="col-md-2 pd">
        <img src="assets/images/mirza_1.png" alt="" srcset="" width="115px">
      </div>
      <div class="form-group row">
        <div class="col-md-4 pd">
          <label class="form-label">পূর্ণ নাম (ইংরেজি)</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col-md-4 pd">
          <label class="form-label">পূর্ণ নাম (বাংলা)</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col-md-4 pd">
          <label class="form-label">এন আইডি নাম্বার</label>
          <input type="number" class="form-control" />
        </div>
        <div class="col-md-4 pd">
          <label class="form-label">ডিজিটাল নাম্বার</label>
          <input type="number" class="form-control" />
        </div>
        <div class="col-md-4 pd">
          <label class="form-label">জন্ম তারিখ</label>
          <input type="number" class="form-control" />
        </div>
        <div class="col-md-4 pd">
          <label class="form-label">ব্লাড গ্রুপ</label>
          <input type="text" class="form-control" />
        </div>
      </div>
    </div>

    <div class="col-md-3 pd">
      <label class="form-label">পেশা</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-md-3 pd">
      <label class="form-label">পিতা</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-md-3 pd">
      <label class="form-label">মাতা</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-md-3 pd">
      <label class="form-label">স্ত্রী/স্বামী</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-md-6 pd">
      <label class="form-label">বর্তমান ঠিকানা</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-md-6 pd">
      <label class="form-label">স্থায়ী ঠিকানা</label>
      <input type="text" class="form-control" />
    </div>
  </div>
</div>
  `;


  const collapseColl = document.createElement('div');
  collapseColl.classList.add('col-md-12');

  const formGroupRowCollapsee = document.createElement('div');
  formGroupRowCollapsee.classList.add('form-group', 'row');

  const collapseButtonColl = document.createElement('div');
  collapseButtonColl.classList.add('col-sm-12', 'text-right');

  const collapseButtonn = document.createElement('button');
  collapseButtonn.classList.add('btn', 'btn-link');
  collapseButtonn.type = 'button';
  collapseButtonn.setAttribute('data-toggle', 'collapse');
  collapseButtonn.setAttribute('data-target', `#collapseSectionn${familyContainer.children.length + 1}`);
  collapseButtonn.setAttribute('aria-expanded', 'false');
  collapseButtonn.textContent = 'পাসপোর্ট সংক্রান্ত তথ্য';

  const collapsibleSectionn = document.createElement('div');
  collapsibleSectionn.classList.add('collapse');
  collapsibleSectionn.id = `collapseSectionn${familyContainer.children.length + 1}`;

  // Replace this section with your provided collapsible code
  collapsibleSectionn.innerHTML = `<div class="form-group row">
   <div class="col-md-6 pd">
     <label class="form-label">PASSPORT NO</label>
     <div class="d-flex">
       <input type="text" class="form-control" data-language="en"
         style="margin-right: 1%;" />
       <button class="btn btn-secondary" type="button" id="searchbtn1">
         <i class="fa fa-search"></i>
       </button>
     </div>
   </div>

   <div class="d-flex">
     <div class="col-md-2 pd">
       <img src="assets/images/mirza_1.png" alt="" srcset="" width="115px">
     </div>
     <div class="form-group row">
       <div class="col-md-4 pd">
         <label class="form-label">NAME</label>
         <input type="text" class="form-control" />
       </div>
       <div class="col-md-4 pd">
         <label class="form-label">FIRST NAME</label>
         <input type="text" class="form-control" />
       </div>
       <div class="col-md-4 pd">
         <label class="form-label">LAST NAME</label>
         <input type="text" class="form-control" />
       </div>
       <div class="col-md-4 pd">
         <label class="form-label">PHONE</label>
         <input type="number" class="form-control" />
       </div>
       <div class="col-md-4 pd">
         <label class="form-label">NID</label>
         <input type="number" class="form-control" />
       </div>
       <div class="col-md-4 pd">
         <label class="form-label">BIRTH DATE</label>
         <input type="number" class="form-control" />
       </div>
     </div>
   </div>

   <div class="col-md-3 pd">
     <label class="form-label">BIRTH ID</label>
     <input type="number" class="form-control" />
   </div>
   <div class="col-md-3 pd">
     <label class="form-label">BIRTH PLACE</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-3 pd">
     <label class="form-label">FATHER's NAME</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-3 pd">
     <label class="form-label">MOTHER's NAME</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-3 pd">
     <label class="form-label">SPOUSE NAME</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-3 pd">
     <label class="form-label">NATIONALITY</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-3 pd">
     <label class="form-label">RELIGION</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-3 pd">
     <label class="form-label">PROFESSION</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-6 pd">
     <label class="form-label">PRESENT ADDRESS</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-6 pd">
     <label class="form-label">PERMANENT ADDRESS</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-6 pd">
     <label class="form-label">PREVIOUS PASSPORT</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-6 pd">
     <label class="form-label">PASSPORT STATUS</label>
     <input type="text" class="form-control" />
   </div>
 </div>
   `;



  const collapseColb = document.createElement('div');
  collapseColb.classList.add('col-md-12');

  const formGroupRowCollapseb = document.createElement('div');
  formGroupRowCollapseb.classList.add('form-group', 'row');

  const collapseButtonColb = document.createElement('div');
  collapseButtonColb.classList.add('col-sm-12', 'text-right');

  const collapseButtonb = document.createElement('button');
  collapseButtonb.classList.add('btn', 'btn-link');
  collapseButtonb.type = 'button';
  collapseButtonb.setAttribute('data-toggle', 'collapse');
  collapseButtonb.setAttribute('data-target', `#collapseSectionb${familyContainer.children.length + 1}`);
  collapseButtonb.setAttribute('aria-expanded', 'false');
  collapseButtonb.textContent = 'জন্ম নিবন্ধন সংক্রান্ত তথ্য';

  const collapsibleSectionb = document.createElement('div');
  collapsibleSectionb.classList.add('collapse');
  collapsibleSectionb.id = `collapseSectionb${familyContainer.children.length + 1}`;


  // Replace this section with your provided collapsible code
  collapsibleSectionb.innerHTML = `<div class="form-group row">
   <div class="col-md-6 pd">
     <label class="form-label">জন্মনিবন্ধন নাম্বার</label>
     <input type="number" class="form-control" />
   </div>
   <div class="col-md-6 pd">
     <label class="form-label">জন্ম তারিখ</label>
     <div class="default-datepicker" style="display: flex;">
       <input type="text" class="datepicker-here  form-control" data-language="en"
         style="margin-right: 1%;" />
       <button class="btn btn-secondary" type="button" id="searchbtn1">
         <i class="fa fa-search"></i>
       </button>
     </div>
   </div>
   <h6 class="card-title"><u style="color: red;">Personal Detail(English)</u>
   </h6>
   <div class="col-md-4 pd">
     <label class="form-label">Name</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-4 pd">
     <label class="form-label">Mothers Name</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-4 pd">
     <label class="form-label">Mother's Nationality</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-4 pd">
     <label class="form-label">Father's Name</label>
     <input type="number" class="form-control" />
   </div>
   <div class="col-md-4 pd">
     <label class="form-label">Father's Nationality</label>
     <input type="number" class="form-control" />
   </div>
   <div class="col-md-4 pd">
     <label class="form-label">Birth Place</label>
     <input type="number" class="form-control" />
   </div>
   <h6 class="card-title"><u style="color: red;">ব্যক্তিগত বিবরণ(বাংলা)</u>
   </h6>
   <div class="col-md-4 pd">
     <label class="form-label">নাম</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-4 pd">
     <label class="form-label">মায়ের নাম</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-4 pd">
     <label class="form-label">মায়ের জাতীয়তা</label>
     <input type="text" class="form-control" />
   </div>
   <div class="col-md-4 pd">
     <label class="form-label">বাবার নাম</label>
     <input type="number" class="form-control" />
   </div>
   <div class="col-md-4 pd">
     <label class="form-label">বাবার জাতীয়তা</label>
     <input type="number" class="form-control" />
   </div>
   <div class="col-md-4 pd">
     <label class="form-label">জন্মস্থান</label>
     <input type="number" class="form-control" />
   </div>
 </div>
   `;



   const collapseColc = document.createElement('div');
   collapseColc.classList.add('col-md-12');
 
   const formGroupRowCollapsec = document.createElement('div');
   formGroupRowCollapsec.classList.add('form-group', 'row');
 
   const collapseButtonColc = document.createElement('div');
   collapseButtonColc.classList.add('col-sm-12', 'text-right');
 
   const collapseButtonc = document.createElement('button');
   collapseButtonc.classList.add('btn', 'btn-link');
   collapseButtonc.type = 'button';
   collapseButtonc.setAttribute('data-toggle', 'collapse');
   collapseButtonc.setAttribute('data-target', `#collapseSectionc${familyContainer.children.length + 1}`);
   collapseButtonc.setAttribute('aria-expanded', 'false');
   collapseButtonc.textContent = 'ভেহিকেল সংক্রান্ত তথ্য'; 
 
   const collapsibleSectionc = document.createElement('div');
   collapsibleSectionc.classList.add('collapse');
   collapsibleSectionc.id = `collapseSectionc${familyContainer.children.length + 1}`;
 
 
   // Replace this section with your provided collapsible code
   collapsibleSectionc.innerHTML = `<div class="form-group row">
   <div class="col-lg-12 vs">
     <select id="searchable-dropdown-car" class="col-md-4 js-example-basic-single">
       <option value="">--- Select Zone ---</option>
       <option value="DHAKA">
         DHAKA </option>
       <option value="DHAKA METRO">
         DHAKA METRO </option>
       <option value="MANIKGONJ">
         MANIKGONJ </option>
       <option value="GAZIPUR">
         GAZIPUR </option>
       <option value="MYMENSINGH">
         MYMENSINGH </option>
       <option value="NARAYANGANJ">
         NARAYANGANJ </option>
       <option value="TANGAIL">
         TANGAIL </option>
       <option value="MADARIPUR">
         MADARIPUR </option>
       <option value="JAMALPUR">
         JAMALPUR </option>
       <option value="MUNSHIGANJ">
         MUNSHIGANJ </option>
       <option value="GOPALGANJ">
         GOPALGANJ </option>
       <option value="SHERPUR">
         SHERPUR </option>
       <option value="KISHOREGANJ">
         KISHOREGANJ </option>
       <option value="NARSINGDI">
         NARSINGDI </option>
       <option value="SHARIATPUR">
         SHARIATPUR </option>
       <option value="NETROKONA">
         NETROKONA </option>
       <option value="RAJBARI">
         RAJBARI </option>
       <option value="FARIDPUR">
         FARIDPUR </option>
       <option value="CHITTAGONG">
         CHITTAGONG </option>
       <option value="CHATTA METRO">
         CHATTA METRO </option>
       <option value="RANGAMATI">
         RANGAMATI </option>
       <option value="KHAGRACHARI">
         KHAGRACHARI </option>
       <option value="COXS BAZAR">
         COXS BAZAR </option>
       <option value="FENI">
         FENI </option>
       <option value="NOAKHALI">
         NOAKHALI </option>
       <option value="LAKSHMIPUR">
         LAKSHMIPUR </option>
       <option value="COMILLA">
         COMILLA </option>
       <option value="BRAHMANBARIA">
         BRAHMANBARIA </option>
       <option value="CHANDPUR">
         CHANDPUR </option>
       <option value="RAJSHAHI">
         RAJSHAHI </option>
       <option value="RAJSHAHI METRO">
         RAJSHAHI METRO </option>
       <option value="BOGRA">
         BOGRA </option>
       <option value="JAIPURHAT">
         JAIPURHAT </option>
       <option value="NAOGAON">
         NAOGAON </option>
       <option value="NATORE">
         NATORE </option>
       <option value="NAWABGANJ">
         NAWABGANJ </option>
       <option value="PABNA">
         PABNA </option>
       <option value="SIRAJGANJ">
         SIRAJGANJ </option>
       <option value="DINAJPUR">
         DINAJPUR </option>
       <option value="PANCHAGARH">
         PANCHAGARH </option>
       <option value="THAKURGAON">
         THAKURGAON </option>
       <option value="RANGPUR">
         RANGPUR </option>
       <option value="KURIGRAM">
         KURIGRAM </option>
       <option value="NILFAMARI">
         NILFAMARI </option>
       <option value="LALMONIRHAT">
         LALMONIRHAT </option>
       <option value="GAIBANDHA">
         GAIBANDHA </option>
       <option value="KHULNA">
         KHULNA </option>
       <option value="KHULNA METRO">
         KHULNA METRO </option>
       <option value="SHATKHIRA">
         SHATKHIRA </option>
       <option value="BAGERHAT">
         BAGERHAT </option>
       <option value="JESSORE">
         JESSORE </option>
       <option value="NARAIL">
         NARAIL </option>
       <option value="MAGURA">
         MAGURA </option>
       <option value="JHENAIDAH">
         JHENAIDAH </option>
       <option value="CHUADANGA">
         CHUADANGA </option>
       <option value="KUSHTIA">
         KUSHTIA </option>
       <option value="MEHERPUR">
         MEHERPUR </option>
       <option value="BARISAL">
         BARISAL </option>
       <option value="BARISAL METRO">
         BARISAL METRO </option>
       <option value="BARGUNA">
         BARGUNA </option>
       <option value="BHOLA">
         BHOLA </option>
       <!-- Add more options as needed -->
     </select>
     <select id="searchable-dropdown-car2" class="col-md-4 js-example-basic-single ">
       <option value="">--- Select Series ---</option>
       <option value="E">
         E </option>
       <option value="AU">
         AU </option>
       <option value="A">
         A </option>
       <option value="KA">
         KA </option>
       <option value="KHA">
         KHA </option>
       <option value="GA">
         GA </option>
       <option value="GHA">
         GHA </option>
       <option value="WUA">
         WUA </option>
       <option value="CHA">
         CHA </option>
       <option value="JA">
         JA </option>
       <option value="JHA">
         JHA </option>
       <option value="TA">
         TA </option>
       <option value="THA">
         THA </option>
       <option value="DA">
         DA </option>
       <option value="TAW">
         TAW </option>
       <option value="TWA">
         TWA </option>
       <option value="DWA">
         DWA </option>
       <option value="DHA">
         DHA </option>
       <option value="NA">
         NA </option>
       <option value="PA">
         PA </option>
       <option value="FA">
         FA </option>
       <option value="BA">
         BA </option>
       <option value="BHA">
         BHA </option>
       <option value="MA">
         MA </option>
       <option value="ZA">
         ZA </option>
       <option value="RA">
         RA </option>
       <option value="LA">
         LA </option>
       <option value="SHA">
         SHA </option>
       <option value="SA">
         SA </option>
       <option value="HA">
         HA </option>
       <option value="CAA">
         CAA </option>
       <option value="AUU">
         AUU </option>
       <option value="UMA">
         UMA </option>
       <option value="U">
         U </option>
       <!-- Add more options as needed -->
     </select>
     <div class="col-md-4">
         <div class="col-md-12" style="display: flex;">
           <input type="text" class="form-control" placeholder="Vehicle number (XX-XXX)"style="margin-right: 1%;">
           <button class="btn btn-secondary" type="button" id="searchbtn1">
             <i class="fa fa-search"></i>
           </button>
         </div>
     </div>
   </div>

   <div class="form-group row">
     <h6 class="card-title"><u style="color: red;">Owners Detail</u>
     </h6>
     <div class="col-md-3 pd">
       <label class="form-label">Owner's Name</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Nid Number</label>
       <input type="number" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Mobile Number</label>
       <input type="number" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">DOB</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Nationality</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Owner's Address</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Joint Owner</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Joint Owner Name</label>
       <input type="text" class="form-control" />
     </div>

     <h6 class="card-title"><u style="color: red;">License Detail</u>
     </h6>
     <div class="col-md-3 pd">
       <label class="form-label">Vehicle Number</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Vehicle Type</label>
       <input type="text" class="form-control" />
     </div>

     <div class="col-md-3 pd">
       <label class="form-label">Vehicle Class</label>
       <input type="text" class="form-control" />
     </div>

     <div class="col-md-3 pd">
       <label class="form-label">Vehicle CC</label>
       <input type="text" class="form-control" />
     </div>

     <div class="col-md-3 pd">
       <label class="form-label">Unladen Weight</label>
       <input type="text" class="form-control" />
     </div>

     <div class="col-md-3 pd">
       <label class="form-label">Laden Weight</label>
       <input type="text" class="form-control" />
     </div>

     <div class="col-md-3 pd">
       <label class="form-label">Vehicle Series</label>
       <input type="text" class="form-control" />
     </div>

     <div class="col-md-3 pd">
       <label class="form-label">Vehicle Color</label>
       <input type="text" class="form-control" />
     </div>

     <div class="col-md-3 pd">
       <label class="form-label">Vehicle Capacity</label>
       <input type="text" class="form-control" />
     </div>

     <div class="col-md-3 pd">
       <label class="form-label">No of Axle</label>
       <input type="text" class="form-control" />
     </div>

     <h6 class="card-title"><u style="color: red;">Registration Info</u>
     </h6>
     <div class="col-md-3 pd">
       <label class="form-label">Registration Number</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Registration Date</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Registration Office Name</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Tax Token Issue Date</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Tax Token Expire Date</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Vehicle Registration Number</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Route Permit Number</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Route Permit Issue Date</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Route Permit Expire Date</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Fitness Issue Date</label>
       <input type="text" class="form-control" />
     </div>
     <div class="col-md-3 pd">
       <label class="form-label">Fitness Expire Date</label>
       <input type="text" class="form-control" />
     </div>
   </div>
 </div>
   `;


  const removeButtonCol = document.createElement('div');
  removeButtonCol.classList.add('col-sm-12', 'text-right');

  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-danger', 'removeButtonf');
  removeButton.type = 'button';
  removeButton.textContent = 'X';

  // Append the elements to their respective parent elements
  inputCol.appendChild(inputField);
  editor.appendChild(textarea);
  editorContainer.appendChild(editor);
  editorContainer.appendChild(removeButton);
  editorCol.appendChild(editorContainer);
  formGroupRow.appendChild(inputCol);
  formGroupRow.appendChild(editorCol);
  formGroupRow.appendChild(removeButtonCol);
  colMd12.appendChild(formGroupRow);

  collapseButtonCol.appendChild(collapseButton);
  formGroupRowCollapse.appendChild(collapseButtonCol);
  collapseCol.appendChild(formGroupRowCollapse);
  collapseCol.appendChild(collapsibleSection);

  collapseButtonColl.appendChild(collapseButtonn);
  formGroupRowCollapsee.appendChild(collapseButtonColl);
  collapseColl.appendChild(formGroupRowCollapsee);
  collapseColl.appendChild(collapsibleSectionn);

  collapseButtonColb.appendChild(collapseButtonb);
  formGroupRowCollapseb.appendChild(collapseButtonColb);
  collapseColb.appendChild(formGroupRowCollapseb);
  collapseColb.appendChild(collapsibleSectionb);

  collapseButtonColc.appendChild(collapseButtonc);
  formGroupRowCollapsec.appendChild(collapseButtonColc);
  collapseColc.appendChild(formGroupRowCollapsec);
  collapseColc.appendChild(collapsibleSectionc);

  newFamilyColumn.appendChild(colMd12);
  newFamilyColumn.appendChild(collapseCol);
  newFamilyColumn.appendChild(collapseColl);
  newFamilyColumn.appendChild(collapseColb);
  newFamilyColumn.appendChild(collapseColc);

  familyContainer.appendChild(newFamilyColumn);

  tinymce.init({
    selector: 'textarea.image-tools',
    height: 500,
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
    imagetools_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    autosave_ask_before_unload: true,
    autosave_interval: "30s",
    autosave_prefix: "{path}{query}-{id}-",
    autosave_restore_when_empty: false,
    autosave_retention: "2m",
    image_advtab: true,
  });

  removeButton.addEventListener('click', function () {
    newFamilyColumn.remove();
  });
  const checkBox = newFamilyColumn.querySelector("#toggleMessage-n");
  const formFields = newFamilyColumn.querySelector("#box-n");
  checkBox.addEventListener("click", function() {
    if (checkBox.checked) {
      formFields.style.display = "block";
    } else {
      formFields.style.display = "none";
    }
  });
});

// Get the checkbox element
var checkBox = document.getElementById("toggleMessage-n");

// Get the form fields container element
var formFields = document.getElementById("box-n");

// Add an event listener to the checkbox
checkBox.addEventListener("click", function () {
  // If the checkbox is checked, show the form fields
  if (checkBox.checked) {
    formFields.style.display = "block";
  } else {
    // If the checkbox is unchecked, hide the form fields
    formFields.style.display = "none";
  }
});
