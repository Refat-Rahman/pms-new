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
  editorCol.style.marginBottom = '3%';

  const editorContainer = document.createElement('div');
  editorContainer.classList.add('editorContainer');

  const editor = document.createElement('div');
  editor.classList.add('mb-2', 'editor', 'card', 'card-body');

  const textarea = document.createElement('textarea');
  textarea.classList.add('image-tools');

  const removeButtonCol = document.createElement('div');
  removeButtonCol.classList.add('col-sm-12', 'text-right');

  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-danger', 'removeButtonf');
  removeButton.type = 'button';
  removeButton.textContent = 'X';

  inputCol.appendChild(inputField);
  editor.appendChild(textarea);
  editorContainer.appendChild(editor);
  editorCol.appendChild(editorContainer);
  formGroupRow.appendChild(inputCol);
  formGroupRow.appendChild(editorCol);
  formGroupRow.appendChild(removeButtonCol);
  colMd12.appendChild(formGroupRow);
  newFamilyColumn.appendChild(colMd12);

  // নতুন সেকশন অ্যাড// 

  //মোবাইল নাম্বার সার্চ//
  const mobileNumberInput = document.createElement('div');
  mobileNumberInput.classList.add('col-md-6', 'd-flex', 'pd');

  const mobileNumberLabel = document.createElement('label');
  mobileNumberLabel.classList.add('col-md-4', 'form-label');
  mobileNumberLabel.textContent = 'মোবাইল নাম্বার';

  const mobileNumberInputField = document.createElement('input');
  mobileNumberInputField.classList.add('col-md-8', 'form-control');
  mobileNumberInputField.setAttribute('type', 'text');
  mobileNumberInputField.style.marginRight = '1%';

  const mobileNumberSearchButton = document.createElement('button');
  mobileNumberSearchButton.classList.add('btn', 'btn-secondary');
  mobileNumberSearchButton.setAttribute('type', 'button');
  mobileNumberSearchButton.id = 'searchbtn1';

  const searchIcon = document.createElement('i');
  searchIcon.classList.add('fa', 'fa-search');

  mobileNumberSearchButton.appendChild(searchIcon);
  mobileNumberInput.append(mobileNumberLabel, mobileNumberInputField, mobileNumberSearchButton);
  formGroupRow.appendChild(mobileNumberInput);

  //জাতীয় পরিচয়পত্র সংক্রান্ত তথ্য'//

  const collapseButtonsContainer = document.createElement('p');
  collapseButtonsContainer.classList.add('gap-1');
  collapseButtonsContainer.style.marginLeft = '1%';
  const collapseButton = document.createElement('a');
  collapseButton.classList.add('btn', 'btn-primary', 'button-gap', 'collapseExample');
  collapseButton.setAttribute('data-bs-toggle', 'collapse');
  collapseButton.setAttribute('href', `#collapseExample${familyContainer.children.length}`);
  collapseButton.setAttribute('role', 'button');
  collapseButton.setAttribute('aria-expanded', 'false');
  collapseButton.setAttribute('aria-controls', `collapseExample${familyContainer.children.length}`);
  collapseButton.textContent = 'জাতীয় পরিচয়পত্র সংক্রান্ত তথ্য';

  const collapsibleSection = document.createElement('div');
  collapsibleSection.classList.add('collapse');
  collapsibleSection.setAttribute('id', `collapseExample${familyContainer.children.length}`);

  const collapsibleContent = document.createElement('div');
  collapsibleContent.classList.add('col-md-12');

  const content = document.createElement('p');
  content.innerHTML = `
<div class="form-group row">
  <div class="d-flex">
    <div class="col-md-1 pd">
      <img src="assets/images/mirza_1.png" alt="" srcset="" width="115px">
    </div>
    <div class="form-group row" id="res">
      <div class="col-lg-4 col-md-6 pd">
        <label class="form-label">পূর্ণ নাম (ইংরেজি)</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-lg-4 col-md-6 pd">
        <label class="form-label">পূর্ণ নাম (বাংলা)</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-lg-4 col-md-6 pd">
        <label class="form-label">এন আইডি নাম্বার</label>
        <input type="number" class="form-control" />
      </div>
      <div class="col-lg-4 col-md-6 pd">
        <label class="form-label">ডিজিটাল নাম্বার</label>
        <input type="number" class="form-control" />
      </div>
      <div class="col-lg-4 col-md-6 pd">
        <label class="form-label">জন্ম তারিখ</label>
        <input type="number" class="form-control" />
      </div>
      <div class="col-lg-4 col-md-6 pd">
        <label class="form-label">ব্লাড গ্রুপ</label>
        <input type="text" class="form-control" />
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-6 pd">
    <label class="form-label">পেশা</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-lg-3 col-md-6 pd">
    <label class="form-label">পিতা</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-lg-3 col-md-6 pd">
    <label class="form-label">মাতা</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-lg-3 col-md-6 pd">
    <label class="form-label">স্ত্রী/স্বামী</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-lg-6 col-md-6 pd">
    <label class="form-label">বর্তমান ঠিকানা</label>
    <textarea type="text" class="form-control"></textarea>
  </div>
  <div class="col-lg-6 col-md-6 pd">
    <label class="form-label">স্থায়ী ঠিকানা</label>
    <textarea type="text" class="form-control"></textarea>
  </div>
</div>
  

<!------------------------------------ano nid--------------------------------------->

<div class="col-md-6 d-flex">
<div class="col-md-10">
  <h4 class="card-title" id="form-group" style="font-size: 15px;text-decoration: underline;">
    মোবাইল
    নাম্বার হতে প্রাপ্ত অন্য এনআইডি</h4>
</div>
<div class="col-md-2">
  <input type="checkbox" id="toggleMessage-n" name="NID" value="num">
</div>
</div>
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
      <div class="col-md-1 pd">
        <img src="assets/images/mirza_1.png" alt="" srcset="" width="116px">
      </div>
      <div class="form-group row" id="res">
        <div class="col-lg-4 col-md-6 pd">
          <label class="form-label">পূর্ণ নাম (ইংরেজি)</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col-lg-4 col-md-6 pd">
          <label class="form-label">পূর্ণ নাম (বাংলা)</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col-lg-4 col-md-6 pd">
          <label class="form-label">এন আইডি নাম্বার</label>
          <input type="number" class="form-control" />
        </div>
        <div class="col-lg-4 col-md-6 pd">
          <label class="form-label">ডিজিটাল নাম্বার</label>
          <input type="number" class="form-control" />
        </div>
        <div class="col-lg-4 col-md-6 pd">
          <label class="form-label">জন্ম তারিখ</label>
          <input type="number" class="form-control" />
        </div>
        <div class="col-lg-4 col-md-6 pd">
          <label class="form-label">ব্লাড গ্রুপ</label>
          <input type="text" class="form-control" />
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 pd">
      <label class="form-label">পেশা</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-lg-3 col-md-6 pd">
      <label class="form-label">পিতা</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-lg-3 col-md-6 pd">
      <label class="form-label">মাতা</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-lg-3 col-md-6 pd">
      <label class="form-label">স্ত্রী/স্বামী</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-lg-3 col-md-6 pd">
      <label class="form-label">বর্তমান ঠিকানা</label>
      <textarea type="text" class="form-control"></textarea>
    </div>
    <div class="col-lg-3 col-md-6 pd">
      <label class="form-label">স্থায়ী ঠিকানা</label>
      <textarea type="text" class="form-control"></textarea>
    </div>
  </div>
</div>
`;

  collapsibleContent.appendChild(content);
  collapsibleSection.appendChild(collapsibleContent);

  //পাসপোর্ট সংক্রান্ত তথ্য'//

  const collapseButton2 = document.createElement('a');
  collapseButton2.classList.add('btn', 'btn-primary', 'button-gap', 'collapseExample2');
  collapseButton2.setAttribute('data-bs-toggle', 'collapse');
  collapseButton2.setAttribute('href', `#collapseExample2${familyContainer.children.length}`);
  collapseButton2.setAttribute('role', 'button');
  collapseButton2.setAttribute('aria-expanded', 'false');
  collapseButton2.setAttribute('aria-controls', `collapseExample2${familyContainer.children.length}`);
  collapseButton2.textContent = 'পাসপোর্ট সংক্রান্ত তথ্য';

  const collapsibleSection2 = document.createElement('div');
  collapsibleSection2.classList.add('collapse');
  collapsibleSection2.setAttribute('id', `collapseExample2${familyContainer.children.length}`);

  const collapsibleContent2 = document.createElement('div');
  collapsibleContent2.classList.add('col-md-12');

  const content2 = document.createElement('p');
  content2.innerHTML = `<div class="form-group row">
  <div class="col-md-6 pd">
    <label class="form-label">PASSPORT NO</label>
    <div class="d-flex">
      <input type="text" class="form-control" class="datepicker-here  form-control" data-language="en"
        style="margin-right: 1%;" />
      <button class="btn btn-secondary" type="button" id="searchbtn1">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>

  <div class="d-flex">
    <div class="col-md-1 pd">
      <img src="assets/images/mirza_1.png" alt="" srcset="" width="116px">
    </div>
    <div class="form-group row" id="res">
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
    <label class="form-label">PREVIOUS PASSPORT</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-md-6 pd">
    <label class="form-label">PASSPORT STATUS</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-md-6 pd">
    <label class="form-label">PRESENT ADDRESS</label>
    <textarea type="text" class="form-control"></textarea>
  </div>
  <div class="col-md-6 pd">
    <label class="form-label">PERMANENT ADDRESS</label>
    <textarea type="text" class="form-control"></textarea>
  </div>
</div>
`;

  collapsibleContent2.appendChild(content2);
  collapsibleSection2.appendChild(collapsibleContent2);

  //জন্মনিবন্ধন সংক্রান্ত তথ্য//

  const collapseButton3 = document.createElement('a');
  collapseButton3.classList.add('btn', 'btn-primary', 'button-gap', 'collapseExample3');
  collapseButton3.setAttribute('data-bs-toggle', 'collapse');
  collapseButton3.setAttribute('href', `#collapseExample3${familyContainer.children.length}`);
  collapseButton3.setAttribute('role', 'button');
  collapseButton3.setAttribute('aria-expanded', 'false');
  collapseButton3.setAttribute('aria-controls', `collapseExample3${familyContainer.children.length}`);
  collapseButton3.textContent = 'জন্মনিবন্ধন সংক্রান্ত তথ্য';

  const collapsibleSection3 = document.createElement('div');
  collapsibleSection3.classList.add('collapse');
  collapsibleSection3.setAttribute('id', `collapseExample3${familyContainer.children.length}`);

  const collapsibleContent3 = document.createElement('div');
  collapsibleContent3.classList.add('col-md-12');

  const content3 = document.createElement('p');
  content3.innerHTML = `<div class="form-group row">
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

  collapsibleContent3.appendChild(content3);
  collapsibleSection3.appendChild(collapsibleContent3);

  //ভেহিকেল সংক্রান্ত তথ্য//

  const collapseButton4 = document.createElement('a');
  collapseButton4.classList.add('btn', 'btn-primary', 'button-gap', 'collapseExample4');
  collapseButton4.setAttribute('data-bs-toggle', 'collapse');
  collapseButton4.setAttribute('href', `#collapseExample4${familyContainer.children.length}`);
  collapseButton4.setAttribute('role', 'button');
  collapseButton4.setAttribute('aria-expanded', 'false');
  collapseButton4.setAttribute('aria-controls', `collapseExample4${familyContainer.children.length}`);
  collapseButton4.textContent = 'ভেহিকেল সংক্রান্ত তথ্য';

  const collapsibleSection4 = document.createElement('div');
  collapsibleSection4.classList.add('collapse');
  collapsibleSection4.setAttribute('id', `collapseExample4${familyContainer.children.length}`);

  const collapsibleContent4 = document.createElement('div');
  collapsibleContent4.classList.add('col-md-12');

  const content4 = document.createElement('p');
  content4.innerHTML = `<div class="form-group row">
<div class="col-lg-12 vs">
  <select id="searchable-dropdown5" class="col-md-4 js-example-basic-single">
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
  <select id="searchable-dropdown6" class="col-md-4 js-example-basic-single ">
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

  collapsibleContent4.appendChild(content4);
  collapsibleSection4.appendChild(collapsibleContent4);


  newFamilyColumn.appendChild(collapseButton);
  newFamilyColumn.appendChild(collapseButton2);
  newFamilyColumn.appendChild(collapseButton3);
  newFamilyColumn.appendChild(collapseButton4);
  newFamilyColumn.appendChild(collapsibleSection);
  newFamilyColumn.appendChild(collapsibleSection2);
  newFamilyColumn.appendChild(collapsibleSection3);
  newFamilyColumn.appendChild(collapsibleSection4);

  removeButtonCol.appendChild(removeButton);
  newFamilyColumn.appendChild(removeButtonCol);

  familyContainer.appendChild(newFamilyColumn);

  //collapse buttons and sections//
  const collapseButtons = [
    collapseButton,
    collapseButton2,
    collapseButton3,
    collapseButton4
  ];
  const collapsibleSections = [
    collapsibleSection,
    collapsibleSection2,
    collapsibleSection3,
    collapsibleSection4
  ];

  // Add click event listeners to the collapse buttons
  collapseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Check if the corresponding section is already open
      const isSectionOpen = collapsibleSections[index].classList.contains('show');

      // Close all sections except the clicked one
      collapsibleSections.forEach((section, i) => {
        if (i !== index) {
          section.classList.remove('show');
        }
      });

      // If the section was not already open, open it
      // Otherwise, keep it open
      if (!isSectionOpen) {
        collapsibleSections[index].classList.add('show');
      }
    });
  });

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
  checkBox.addEventListener("click", function () {
    if (checkBox.checked) {
      formFields.style.display = "block";
    } else {
      formFields.style.display = "none";
    }
  });
});
// মোবাইল নাম্বার হতে প্রাপ্ত অন্য এনআইডি- add more button
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

