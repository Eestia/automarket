<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index() {
        $brands = Brand::all();
        return inertia('Admin/Brands/Index', compact('brands'));
    }

    public function create() {
        return inertia('Admin/Brands/Create');
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'nullable|image|max:2048',
        ]);

        $path = $request->file('logo') ? $request->file('logo')->store('brands','public') : null;

        Brand::create([
            'name' => $request->name,
            'logo' => $path,
        ]);

        return redirect()->route('brands.index');
    }

    public function edit(Brand $brand) {
        return inertia('Admin/Brands/Edit', compact('brand'));
    }

    public function update(Request $request, Brand $brand) {
        $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('logo')) {
            $brand->logo = $request->file('logo')->store('brands','public');
        }

        $brand->name = $request->name;
        $brand->save();

        return redirect()->route('brands.index');
    }

    public function destroy(Brand $brand) {
        $brand->delete();
        return redirect()->route('brands.index');
    }
}
