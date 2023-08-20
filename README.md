## A react-vite app that lets you sign pdf and save to the Db


```bash 
src
 ┣ @types
 ┃ ┣ base.type.ts
 ┃ ┗ svg.d.ts
 ┣ API
 ┃ ┣ basePath.ts
 ┃ ┗ fetchApi.ts
 ┣ assets
 ┃ ┣ svg
 ┃ ┃ ┣ announcement.svg
 ┃ ┃ ┗ Group-folders.svg
 ┃ ┗ index.ts
 ┣ components
 ┃ ┣ interfaces
 ┃ ┃ ┗ component-module.ts
 ┃ ┣ lib
 ┃ ┃ ┗ utils.ts
 ┃ ┣ ui
 ┃ ┃ ┣ Alert.tsx
 ┃ ┃ ┣ avatar.tsx
 ┃ ┃ ┣ badge.tsx
 ┃ ┃ ┣ button.tsx
 ┃ ┃ ┣ card.tsx
 ┃ ┃ ┣ command.tsx
 ┃ ┃ ┣ dialog.tsx
 ┃ ┃ ┣ dropdown-menu.tsx
 ┃ ┃ ┣ input.tsx
 ┃ ┃ ┣ label.tsx
 ┃ ┃ ┣ popover.tsx
 ┃ ┃ ┣ select.tsx
 ┃ ┃ ┣ separator.tsx
 ┃ ┃ ┣ sheet.tsx
 ┃ ┃ ┣ table.tsx
 ┃ ┃ ┣ tabs.tsx
 ┃ ┃ ┣ toast.tsx
 ┃ ┃ ┣ toaster.tsx
 ┃ ┃ ┣ type.d.ts
 ┃ ┃ ┗ use-toast.ts
 ┃ ┣ data-table-column-header.tsx
 ┃ ┣ data-table-faceted-filter.tsx
 ┃ ┣ data-table-pagination.tsx
 ┃ ┣ data-table-row-actions.tsx
 ┃ ┣ data-table-toolbar.tsx
 ┃ ┣ data-table-view-options.tsx
 ┃ ┣ data-table.tsx
 ┃ ┣ Loading.tsx
 ┃ ┣ NotFound.tsx
 ┃ ┣ ProtectedRoutes.tsx
 ┃ ┣ ShowError.tsx
 ┃ ┣ snackNoticebar.tsx
 ┃ ┗ userNav.tsx
 ┣ context
 ┃ ┗ DocumentContext.tsx
 ┣ errors
 ┃ ┗ FallBackError.tsx
 ┣ hooks
 ┃ ┣ useAuth.ts
 ┃ ┣ useFetchAllDocuments.tsx
 ┃ ┣ useFileUpload.tsx
 ┃ ┣ useGetUserProfile.tsx
 ┃ ┣ useGetWithParams.tsx
 ┃ ┣ useRegister.tsx
 ┃ ┣ useSaveSignature.tsx
 ┃ ┗ useSignIn.ts
 ┣ modules
 ┃ ┣ auth
 ┃ ┃ ┣ login.tsx
 ┃ ┃ ┣ register.tsx
 ┃ ┃ ┗ userAuthForm.tsx
 ┃ ┣ Documents
 ┃ ┃ ┣ Annotation.tsx
 ┃ ┃ ┣ DocumentCanvas.tsx
 ┃ ┃ ┣ DraggableTool.tsx
 ┃ ┃ ┣ Participant.tsx
 ┃ ┃ ┣ PdfCard.tsx
 ┃ ┃ ┣ PdfProfile.tsx
 ┃ ┃ ┗ SignaturePad.tsx
 ┃ ┣ fileUpload
 ┃ ┃ ┣ UploadedFiles.tsx
 ┃ ┃ ┗ UploadFiles.tsx
 ┃ ┣ home
 ┃ ┃ ┗ Home.tsx
 ┃ ┣ interface
 ┃ ┃ ┗ user-module.ts
 ┃ ┣ modals
 ┃ ┃ ┗ Modal.tsx
 ┃ ┗ Tabs
 ┃ ┃ ┣ Details.tsx
 ┃ ┃ ┣ Location.tsx
 ┃ ┃ ┗ State.tsx
 ┣ schema
 ┃ ┣ loginSchema.ts
 ┃ ┗ registerSchama.ts
 ┣ utils
 ┃ ┣ apiActions.ts
 ┃ ┣ Auth.ts
 ┃ ┣ format.ts
 ┃ ┗ handleApiError.ts
 ┣ App.css
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts`
``` 
### To run the app 

install dependencies
 
``npm install``

start the app
``npm run dev``

open wwww.localhost:3000 in your browser to use the application