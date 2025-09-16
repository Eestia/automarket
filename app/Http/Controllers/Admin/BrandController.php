<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrandController extends Controller
{
    public function index()
    {
        return redirect()->route('admin.dashboard');
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|max:255|unique:brands']);
        Brand::create(['name' => $request->name]);

        return redirect()->route('admin.dashboard')->with('success', 'Marque ajoutée.');
    }

    public function update(Request $request, Brand $brand)
    {
        $request->validate(['name' => 'required|string|max:255|unique:brands,name,' . $brand->id]);
        $brand->update(['name' => $request->name]);

        return redirect()->route('admin.dashboard')->with('success', 'Marque mise à jour.');
    }

    public function destroy(Brand $brand)
    {
        $brand->delete();

        return redirect()->route('admin.dashboard')->with('success', 'Marque supprimée.');
    }
}
