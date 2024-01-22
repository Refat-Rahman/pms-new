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



document.querySelector('.addButton').addEventListener('click', function () {
  const sectionsContainer = document.getElementById('sectionsContainer');

  const newSection = document.createElement('div');
  newSection.classList.add('section');

  const formGroupRow = document.createElement('div');
  formGroupRow.classList.add('form-group', 'row');

  const inputCol = document.createElement('div');
  inputCol.classList.add('col-sm-2');

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.classList.add('form-control', 'input-field');
  inputField.placeholder = 'অন্যান্য তথ্য';

  const textareaCol = document.createElement('div');
  textareaCol.classList.add('mb-2','col-sm-10','card','card-body');

  const textarea = document.createElement('textarea');
  textarea.classList.add('image-tools');

  const removeButtonCol = document.createElement('div');
  removeButtonCol.classList.add('col-sm-12', 'text-right');

  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-danger', 'removeButton');
  removeButton.type = 'button';
  removeButton.textContent = 'X';

  inputCol.appendChild(inputField);
  textareaCol.appendChild(textarea);
  removeButtonCol.appendChild(removeButton);
  formGroupRow.appendChild(inputCol);
  formGroupRow.appendChild(textareaCol);
  formGroupRow.appendChild(removeButtonCol);
  newSection.appendChild(formGroupRow);

  sectionsContainer.appendChild(newSection);

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
    newSection.remove();
  });
});
